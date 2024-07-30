import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import { TimelineEvents } from './TimelineEvents.js'
import Reveal from '@/components/Reveal'
import { Link } from '@mui/material'

export default function TimeLineTwo() {
  return (
    <section className="bg-stone-100 py-16" id="timeline">
      <div className="flex flex-col justify-center mb-10">
        <div className="flex flex-col items-center gap-4 mb-16">
          <Reveal>
            <h2 className="font-Tektur text-[#AE00FF] text-lg font-bold tracking-wider">TIMELINE</h2>
          </Reveal>
          <Reveal width="p-3 -m-3">
            <h1 className="text-5xl font-serif font-medium leading-10 text-center">Professional Path</h1>
          </Reveal>
          <Reveal>
            <h2 className="font-medium text-lg text-[#4d4d4d]">A Chronicle of My Career</h2>
          </Reveal>
        </div>
        <Timeline position="right" className="group w-fit mx-auto">
          {[...TimelineEvents].reverse().map((event, index) => (
            <TimelineItem
              key={index}
              className='group-hover:opacity-25 hover:!opacity-100 transition-opacity duration-30'
            >
              <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="inherit" color="text.secondary">
              <Link href={event.link} target="_blank" rel="noopener noreferrer" className='w-min'>
                {event.date}
              </Link>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                <Link href={event.link} target="_blank" rel="noopener noreferrer">
                  <img src={event.logo} alt={event.title} className="w-full h-full object-contain" />
                </Link>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '20px', px: 2 }}>
                <Link href={event.link} target="_blank" rel="noopener noreferrer" className='flex flex-col'>
                  <Typography variant="h6" component="span">
                    {event.title}
                  </Typography>
                  <Typography variant="h7" component="span" fontWeight={400}>
                    {event.location}
                  </Typography>
                </Link>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
