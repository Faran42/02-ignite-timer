import { Cycle } from './reducer'

export enum ActioinTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActioinTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActioinTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interrupCurrentCycleAction() {
  return {
    type: ActioinTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
