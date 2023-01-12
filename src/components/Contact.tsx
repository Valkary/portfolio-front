type Props = {};

export default function Contact({}: Props) {
    return (
        <section id="contact" className="snap-start">
            <div className="h-screen flex flex-col text-center max-w-7xl px-10 mx-auto relative snap-mandatory">
                <h3 className="mb-6 mt-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
                <div className="w-full absolute top-[30%] bg-[#f43f5e]/5 left-0 h-[550px] -skew-y-12" />
            </div>
        </section>
    );
}
