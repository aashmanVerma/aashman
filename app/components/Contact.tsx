import React, { forwardRef } from 'react';

interface ContactProps {
  email: string;
  calLink?: string;
}

const Contact = forwardRef<HTMLDivElement, ContactProps>(({ email, calLink }, ref) => {
    return (
        <div id='contact' ref={ref} className='max-w-3xl w-full z-10 px-4 flex flex-col gap-y-3 my-10'>
            <p className="text-xl font-medium text-left mb-2 text-[#1e3a5f]">Contact Me ~</p>
            <div className='flex flex-col gap-y-3'>
                <p className='flex flex-wrap text-[#2c4a6b]'>
                    Drop me a message at&nbsp;
                    <a href={`mailto:${email}`} className='underline-offset-2 underline text-[#1e3a5f] hover:text-[#2c4a6b] transition-colors'>{email}</a>
                    {calLink && (
                        <>
                            &nbsp;or&nbsp;
                            <a href={calLink} target="_blank" rel="noreferrer" className='underline-offset-2 underline text-[#1e3a5f] hover:text-[#2c4a6b] transition-colors'>book a meeting</a>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
});

Contact.displayName = 'Contact';

export default Contact;
