import { PrismicRichText } from '@prismicio/react'

function RichText ({content}) {
    const paragraphStyles = 'text-l mb-2 text-white font-normal';
    const h2Styles = 'text-3xl md:text-6xl mb-2 font-display font-bold leading-none text-signal-beam';
    return (
        <PrismicRichText field={content} components={{
            paragraph: ({children}) => <p className={paragraphStyles}>{children}</p>,
            heading2: ({children}) => <h2 className={h2Styles}>{children}</h2>,
        }}/>
    )
}

export default RichText;