import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import { TimelineEvents } from './timelineEvents.js'
import Reveal from '@/components/Reveal'
import { Link } from '@mui/material'

function TimelineSection() {
  return (
    <section className="bg-stone-100 py-16" id="timeline">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-Tektur text-[#AE00FF] text-lg font-bold tracking-wider">TIMELINE</h2>
          <h1 className="text-5xl font-serif font-medium leading-10 text-center">Professional Path</h1>
          <h2 className="font-medium text-lg text-[#4d4d4d]">My Work Journey</h2>
        </div>
        <Timeline position="right" className="group mx-auto mt-16 mb-8 !p-0 max-w-xl">
          {TimelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              className="sm:group-hover:opacity-25 sm:hover:!opacity-100 transition-opacity duration-30"
            >
              <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="inherit" color="text.secondary">
                <Link href={event.link} target="_blank" rel="noopener noreferrer">
                  {event.date}
                </Link>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <img src={event.logo} alt={event.title} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '20px', maxWidth: '380px' }}>
                <Link href={event.link} target="_blank" rel="noopener noreferrer" className="flex flex-col">
                  <Typography variant="h5" component="span">
                    {event.title}
                  </Typography>
                  <Reveal>
                    <Typography variant="h6" component="span" fontWeight={300}>
                      {event.organization}
                    </Typography>
                  </Reveal>
                </Link>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}

export default TimelineSection
