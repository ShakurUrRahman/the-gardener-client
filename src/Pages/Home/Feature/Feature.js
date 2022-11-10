import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Competitive exchange rates',
        description:
            'We provide always quality with margin prize',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'We justify with our client',
        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            'No late to grow your future garden',
        icon: BoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            '24x7 customer and app connected with us',
        icon: ChatBubbleBottomCenterTextIcon,
    },
]

export default function Feature() {
    return (
        <div className="mb-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Why we are the best!
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Build your own Roof Garden. Our options vary from providing fresh food, temperature control,medicinal plants to decorative options - as per your requirement.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
