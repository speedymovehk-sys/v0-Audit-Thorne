'use client'

import { Button } from '@/components/ui/button'

interface MobileCtaBarProps {
  onSchedule: () => void
}

export function MobileCtaBar({ onSchedule }: MobileCtaBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/90 p-3 backdrop-blur-md md:hidden">
      <Button size="lg" className="w-full" onClick={onSchedule}>
        Schedule Audit
      </Button>
    </div>
  )
}
