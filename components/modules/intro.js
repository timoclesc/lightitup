import RichText from '@/modules/rich-text'

export default function Intro({content}) {
  return (
    <div className="bg-fun-blue p-10 flex items-center justify-center">
      <section className="p-8 max-w-sm bg-wild-blue-yonder">
        <RichText content={content} />   
    </section>
    </div>
  )
}
