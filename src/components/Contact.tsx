import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

const input_classes = "flex-grow outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f43f5e]/40 focus:text-[#f43f5e]/40 hover:border-[#f43f5e]/40";

type Inputs = {
    name: string,
    last_names: string,
    email: string,
    message: string,
};

export default function Contact({ }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <section id="contact" className="snap-start">
            <div className="h-screen flex flex-col text-center max-w-7xl px-10 mx-auto relative snap-mandatory">
                <h3 className="mb-6 mt-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

                <div className="w-full h-full flex flex-col justify-evenly">
                    <h3 className="uppercase tracking-wide text-gray-300 text-lg">
                        I've got just what you <span className="underline decoration-[#f43f5e]">need</span>, lets talk!
                    </h3>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full mx-auto flex flex-col items-center xl:w-2/3 gap-2 z-20"
                    >
                        <div className="w-full flex flex-col md:flex-row items-center md:justify-center gap-2">
                            <input
                                type="text"
                                placeholder="Name"
                                defaultValue={""}
                                {...register("name", { required: true })}
                                className={`${input_classes} w-full ${errors.name && "border border-red-600"}`}
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                defaultValue={""}
                                {...register("last_names")}
                                className={`${input_classes} w-full`}
                            />
                        </div>
                        <div className="w-full flex justify-center gap-1">
                            <input
                                type="text"
                                placeholder="Email"
                                defaultValue={""}
                                {...register("email", { required: true })}
                                className={`${input_classes} ${errors.email && "border border-red-600"}`}
                            />
                        </div>
                        <div className="w-full flex justify-center rounded-sm">
                            <textarea
                                placeholder="What can I help you with?"
                                defaultValue={""}
                                {...register("message", { required: true })}
                                className={`${input_classes} ${errors.message && "border border-red-600"} h-[150px]`}
                            />
                        </div>

                        <button className="border border-[#f43f5e] w-full py-3 rounded-md">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
