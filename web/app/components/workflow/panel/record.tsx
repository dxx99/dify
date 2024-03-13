import { memo } from 'react'
import Run from '../run'
import { useStore } from '../store'

const Record = () => {
  const { currentSequenceNumber, workflowRunId } = useStore()
  return (
    <div className='flex flex-col w-[400px] h-full rounded-2xl border-[0.5px] border-gray-200 shadow-xl bg-white'>
      <div className='flex items-center justify-between p-4 pb-1 text-base font-semibold text-gray-900'>
        {`Test Run#${currentSequenceNumber}`}
      </div>
      <Run runID={workflowRunId} />
    </div>
  )
}

export default memo(Record)
