// Instructions: Update the divider styling to better match the original design

'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log('Sign in attempt:', { email, password })
  }

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log('Google sign in attempt')
  }

  const handleSignUpClick = () => {
    // Handle navigation to sign up page
    console.log('Navigate to sign up')
  }

  return (
    <Card className="w-full max-w-md glass auth-card-glow">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white heading-glow">
          Sign In
        </CardTitle>
        <CardDescription className="text-[#EAEAEA]">
          Welcome back! Sign in to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#EAEAEA]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-neon"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#EAEAEA]">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-neon"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full btn-neon-gradient text-white"
          >
            Sign In
          </Button>
        </form>

        <div className="relative divider-glow">
          <div className="relative flex justify-center text-xs uppercase">
            <span className="divider-text text-[#EAEAEA]">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <Button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full glass border-2 border-transparent text-[#EAEAEA] hover:text-white btn-neon-gradient"
        >
          Continue with Google
        </Button>

        <div className="text-center">
          <Button
            type="button"
            variant="link"
            onClick={handleSignUpClick}
            className="text-sm text-neon-cyan hover:text-white"
          >
            Don't have an account? Sign up
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
