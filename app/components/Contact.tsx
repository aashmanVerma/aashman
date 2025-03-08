import React, { forwardRef } from 'react';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div id='contact' ref={ref} className='max-w-3xl w-full z-10 px-4 flex flex-col gap-y-3 my-10'>
            <p className="text-xl font-medium text-left mb-2">Contact Me ~</p>
            <div className='flex flex-col gap-y-3'>
                <TypewriterEffectSmooth words={[
                    {
                        text: 'Want to create something awesome?',
                        className: 'text-base sm:text-xl md:text-2xl lg:text-3xl'
                    }
                ]}
                />
                <p className='flex flex-wrap'>Drop me a message at&nbsp;
                    <a href='mailto:vermaaashman16@gmail.com' className='underline-offset-2 underline'>vermaaashman16@gmail.com</a>
                    &nbsp;or&nbsp;
                    <a href='https://twitter.com/verma_aashman' className='underline-offset-2 underline'>twitter.com</a>
                </p>
            </div>
        </div>
    );
});

Contact.displayName = 'Contact';

export default Contact;
