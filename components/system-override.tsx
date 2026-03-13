"use client"

import React, { useState, useEffect, useRef } from "react"
import { Gamepad, RefreshCw, ChevronLeft, ShieldAlert } from "lucide-react"

export function SystemOverride() {
  const [activeGame, setActiveGame] = useState<"select" | "snake" | "brick">("select")
  const [gameState, setGameState] = useState<"ready" | "playing" | "gameover">("ready")
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  // -------------------------------------------------------------
  // SNAKE GAME LOGIC
  // -------------------------------------------------------------
  const GRID_SIZE = 16
  const [snake, setSnake] = useState<{ x: number; y: number }[]>([{ x: 8, y: 8 }])
  const [food, setFood] = useState<{ x: number; y: number }>({ x: 4, y: 4 })
  const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 0, y: -1 })
  const directionRef = useRef(direction)
  directionRef.current = direction

  const initSnakeGame = () => {
    setSnake([{ x: 8, y: 8 }])
    setFood({ x: 3, y: 3 })
    setDirection({ x: 0, y: -1 })
    setScore(0)
    setGameState("ready")
  }

  useEffect(() => {
    if (activeGame !== "snake" || gameState !== "playing") return

    const handleKeyDown = (e: KeyboardEvent) => {
      const dir = directionRef.current
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          if (dir.y !== 1) setDirection({ x: 0, y: -1 })
          e.preventDefault()
          break
        case "ArrowDown":
        case "s":
        case "S":
          if (dir.y !== -1) setDirection({ x: 0, y: 1 })
          e.preventDefault()
          break
        case "ArrowLeft":
        case "a":
        case "A":
          if (dir.x !== 1) setDirection({ x: -1, y: 0 })
          e.preventDefault()
          break
        case "ArrowRight":
        case "d":
        case "D":
          if (dir.x !== -1) setDirection({ x: 1, y: 0 })
          e.preventDefault()
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeGame, gameState])

  useEffect(() => {
    if (activeGame !== "snake" || gameState !== "playing") return

    const tick = () => {
      setSnake((prevSnake) => {
        const head = prevSnake[0]
        const dir = directionRef.current
        const newHead = { x: head.x + dir.x, y: head.y + dir.y }

        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameState("gameover")
          return prevSnake
        }

        for (let segment of prevSnake) {
          if (segment.x === newHead.x && segment.y === newHead.y) {
            setGameState("gameover")
            return prevSnake
          }
        }

        const newSnake = [newHead, ...prevSnake]

        if (newHead.x === food.x && newHead.y === food.y) {
          let newFood = { x: 0, y: 0 }
          let validFood = false
          while (!validFood) {
            newFood = {
              x: Math.floor(Math.random() * GRID_SIZE),
              y: Math.floor(Math.random() * GRID_SIZE),
            }
            validFood = !newSnake.some((seg) => seg.x === newFood.x && seg.y === newFood.y)
          }
          setFood(newFood)
          setScore((s) => {
            const next = s + 10
            if (next > highScore) setHighScore(next)
            return next
          })
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }

    const interval = setInterval(tick, Math.max(85, 160 - score * 1.5))
    return () => clearInterval(interval)
  }, [activeGame, gameState, food, score, highScore])


  // -------------------------------------------------------------
  // BRICK BREAKER GAME LOGIC
  // -------------------------------------------------------------
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [paddleX, setPaddleX] = useState(120)
  const paddleXRef = useRef(120)
  paddleXRef.current = paddleX

  const initBrickGame = () => {
    setScore(0)
    setGameState("ready")
    setPaddleX(120)
  }

  useEffect(() => {
    if (activeGame !== "brick" || gameState !== "playing") return

    const handleKeyDown = (e: KeyboardEvent) => {
      const step = 20
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        setPaddleX((px) => Math.max(0, px - step))
        e.preventDefault()
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        setPaddleX((px) => Math.min(240, px + step))
        e.preventDefault()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeGame, gameState])

  useEffect(() => {
    if (activeGame !== "brick" || gameState !== "playing") return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const ballRadius = 6
    let x = canvas.width / 2
    let y = canvas.height - 30
    let dx = 2.5
    let dy = -2.5

    const paddleHeight = 8
    const paddleWidth = 60

    const brickRowCount = 3
    const brickColumnCount = 6
    const brickWidth = 42
    const brickHeight = 12
    const brickPadding = 5
    const brickOffsetTop = 20
    const brickOffsetLeft = 12

    let bricks: { x: number; y: number; status: number }[][] = []
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = []
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }
      }
    }

    let currentScore = 0
    let animationFrameId: number

    const drawBall = () => {
      ctx.beginPath()
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
      ctx.fillStyle = "#FF6B7A" 
      ctx.fill()
      ctx.closePath()
    }

    const drawPaddle = () => {
      ctx.beginPath()
      ctx.rect(paddleXRef.current, canvas.height - paddleHeight - 2, paddleWidth, paddleHeight)
      ctx.fillStyle = "#2F81F7" 
      ctx.fill()
      ctx.closePath()
    }

    const drawBricks = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop
            bricks[c][r].x = brickX
            bricks[c][r].y = brickY
            ctx.beginPath()
            ctx.rect(brickX, brickY, brickWidth, brickHeight)
            ctx.fillStyle = r === 0 ? "#FDB927" : r === 1 ? "#6366F1" : "#FF6B7A"
            ctx.fill()
            ctx.closePath()
          }
        }
      }
    }

    const collisionDetection = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          const b = bricks[c][r]
          if (b.status === 1) {
            if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
              dy = -dy
              b.status = 0
              currentScore += 10
              setScore(currentScore)
              setHighScore((hs) => Math.max(hs, currentScore))

              let allCleared = true
              for (let col = 0; col < brickColumnCount; col++) {
                for (let row = 0; row < brickRowCount; row++) {
                  if (bricks[col][row].status === 1) allCleared = false
                }
              }
              if (allCleared) {
                setGameState("gameover")
              }
            }
          }
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawBricks()
      drawBall()
      drawPaddle()
      collisionDetection()

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx
      }
      if (y + dy < ballRadius) {
        dy = -dy
      } else if (y + dy > canvas.height - ballRadius - paddleHeight - 2) {
        if (x > paddleXRef.current && x < paddleXRef.current + paddleWidth) {
          dy = -dy
        } else {
          setGameState("gameover")
          return
        }
      }

      x += dx
      y += dy
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animationFrameId)
  }, [activeGame, gameState])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeGame !== "brick" || gameState !== "playing") return
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const relativeX = e.clientX - rect.left
    if (relativeX > 30 && relativeX < canvas.width - 30) {
      setPaddleX(relativeX - 30)
    }
  }


  return (
    <section className="py-16 md:py-24 bg-white text-black border-t-4 border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 space-y-3 text-center">
          <p className="text-sm font-mono font-bold text-gray-500">// System Override</p>
          <h2 className="text-4xl md:text-6xl font-black">
            System <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">Override</span>
          </h2>
          <p className="text-lg text-gray-600 font-mono max-w-xl mx-auto">
            Take a break from the code. Neutralize the corrupted data nodes. Don't hit the mainframe boundaries.
          </p>
        </div>

        {/* Neubrutalist Console container */}
        <div className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:grid md:grid-cols-12 max-w-4xl mx-auto">
          
          {/* Left panel diagnostics */}
          <div className="p-6 md:col-span-4 bg-gray-50 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-2 border-black rounded-xl px-3 py-2 bg-white text-xs font-mono font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Gamepad className="w-5 h-5 text-[#2F81F7]" />
                <span>MISSION_CONTROL.EXE</span>
              </div>

              {/* Scores */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white border-2 border-black rounded-2xl text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">Score</p>
                  <p className="text-lg font-black text-black font-mono mt-0.5">{String(score).padStart(3, "0")}</p>
                </div>
                <div className="p-3 bg-white border-2 border-black rounded-2xl text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">High</p>
                  <p className="text-lg font-black text-[#2F81F7] font-mono mt-0.5">{String(highScore).padStart(3, "0")}</p>
                </div>
              </div>
            </div>

            {/* Error diagnostic log */}
            {gameState === "gameover" && (
              <div className="p-4 bg-red-50 border-2 border-red-500 rounded-2xl space-y-1">
                <span className="text-[10px] font-mono font-bold text-red-500 flex items-center gap-1 uppercase">
                  <ShieldAlert className="w-4 h-4" /> Runtime Error
                </span>
                <p className="text-xs font-mono text-gray-500 leading-relaxed">
                  System collapse detected. Stream terminated. Rebooting...
                </p>
              </div>
            )}

            {/* Game instructions */}
            <div className="text-[11px] font-mono text-gray-500 font-bold space-y-1 leading-normal">
              {activeGame === "snake" && <p>▹ Controls: Use [WASD] or [Arrow Keys] to collect the glowing pink code blocks.</p>}
              {activeGame === "brick" && <p>▹ Controls: Move mouse or use [A/D] or [Arrows] to bounce the ball.</p>}
              {activeGame === "select" && <p>▹ Select a diagnostic protocol to begin neutralizing mainframe node errors.</p>}
            </div>

          </div>

          {/* Right gameboard grid */}
          <div className="p-8 md:col-span-8 bg-gray-950 flex items-center justify-center min-h-[320px] relative">
            
            {/* Selector Menu */}
            {activeGame === "select" && (
              <div className="text-center space-y-6 max-w-xs font-mono text-white">
                <div className="space-y-1">
                  <h3 className="text-lg font-black uppercase text-white">Choose Your Protocol</h3>
                  <p className="text-xs text-gray-400">Select a subsystem to neutralize corrupted nodes.</p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setActiveGame("snake")
                      initSnakeGame()
                    }}
                    className="w-full flex items-center justify-between px-4 py-3.5 bg-white border-2 border-black rounded-2xl text-black font-mono font-extrabold shadow-[4px_4px_0px_0px_#FDB927] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
                  >
                    <span>🐍 CORE_SNAKE.EXE</span>
                    <span className="text-[10px] text-gray-400">Classic collector</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveGame("brick")
                      initBrickGame()
                    }}
                    className="w-full flex items-center justify-between px-4 py-3.5 bg-white border-2 border-black rounded-2xl text-black font-mono font-extrabold shadow-[4px_4px_0px_0px_#2F81F7] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
                  >
                    <span>🧱 CORE_BRICK.EXE</span>
                    <span className="text-[10px] text-gray-400">Neutralize barrier</span>
                  </button>
                </div>
              </div>
            )}

            {/* Snake sandbox */}
            {activeGame === "snake" && (
              <div className="flex flex-col items-center gap-4">
                {gameState === "ready" ? (
                  <button
                    onClick={() => setGameState("playing")}
                    className="px-6 py-3 bg-[#00FF66] border-2 border-black text-black font-black font-mono rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                  >
                    Initialize Protocol
                  </button>
                ) : gameState === "playing" ? (
                  <div 
                    className="grid bg-[#080B10] border-2 border-gray-800 rounded-2xl overflow-hidden relative shadow-inner"
                    style={{
                      gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                      gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                      width: "256px",
                      height: "256px"
                    }}
                  >
                    {/* Food */}
                    <span 
                      className="absolute w-[12px] h-[12px] bg-[#FF6B7A] rounded-full animate-pulse border border-white/20"
                      style={{
                        left: `${(food.x * 256) / GRID_SIZE + 2}px`,
                        top: `${(food.y * 256) / GRID_SIZE + 2}px`
                      }}
                    />
                    {/* Snake body */}
                    {snake.map((seg, idx) => (
                      <span
                        key={idx}
                        className={`absolute w-[14px] h-[14px] ${idx === 0 ? "bg-[#00FF66]" : "bg-[#00FF66]/70"}`}
                        style={{
                          left: `${(seg.x * 256) / GRID_SIZE + 1}px`,
                          top: `${(seg.y * 256) / GRID_SIZE + 1}px`
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center space-y-4 font-mono text-white">
                    <p className="text-[#FF6B7A] font-extrabold text-lg uppercase">Subsystem Crashed!</p>
                    <p className="text-xs text-gray-400">Final score: {score}</p>
                    <div className="flex gap-2.5 justify-center">
                      <button
                        onClick={initSnakeGame}
                        className="px-4 py-2 bg-white text-black border-2 border-black rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Reboot System
                      </button>
                      <button
                        onClick={() => setActiveGame("select")}
                        className="px-4 py-2 bg-gray-800 text-gray-400 border border-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        ← Selector
                      </button>
                    </div>
                  </div>
                )}

                {gameState !== "gameover" && (
                  <button
                    onClick={() => setActiveGame("select")}
                    className="text-xs font-mono text-gray-500 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back to Selector
                  </button>
                )}
              </div>
            )}

            {/* Brick Breaker sandbox */}
            {activeGame === "brick" && (
              <div className="flex flex-col items-center gap-4">
                {gameState === "ready" ? (
                  <button
                    onClick={() => setGameState("playing")}
                    className="px-6 py-3 bg-[#2F81F7] border-2 border-black text-white font-black font-mono rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                  >
                    Execute Runtime
                  </button>
                ) : gameState === "playing" ? (
                  <canvas
                    ref={canvasRef}
                    width="300"
                    height="220"
                    className="bg-[#080B10] border-2 border-gray-800 rounded-xl shadow-inner cursor-none"
                    onMouseMove={handleMouseMove}
                  />
                ) : (
                  <div className="text-center space-y-4 font-mono text-white">
                    <p className="text-[#FF6B7A] font-extrabold text-lg uppercase">Subsystem Crashed!</p>
                    <p className="text-xs text-gray-400">Final score: {score}</p>
                    <div className="flex gap-2.5 justify-center">
                      <button
                        onClick={initBrickGame}
                        className="px-4 py-2 bg-white text-black border-2 border-black rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Reboot System
                      </button>
                      <button
                        onClick={() => setActiveGame("select")}
                        className="px-4 py-2 bg-gray-800 text-gray-400 border border-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        ← Selector
                      </button>
                    </div>
                  </div>
                )}

                {gameState !== "gameover" && (
                  <button
                    onClick={() => setActiveGame("select")}
                    className="text-xs font-mono text-gray-500 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back to Selector
                  </button>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}
