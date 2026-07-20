'use client'

import { CheckCircle } from 'lucide-react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface ActionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ActionModal({ open, onOpenChange }: ActionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-start">
          <span className="mb-2 flex size-11 items-center justify-center rounded-full bg-accent">
            <CheckCircle className="size-6 text-primary" />
          </span>
          <DialogTitle className="text-lg tracking-tight">
            Audit Briefing Initiated
          </DialogTitle>
          <DialogDescription className="text-pretty leading-relaxed">
            Thank you. A senior engagement partner will review your firm profile
            and reach out within one business day to schedule your confidential
            scope assessment. No obligation, fully privileged.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Close
          </DialogClose>
          <DialogClose render={<Button />}>Understood</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
