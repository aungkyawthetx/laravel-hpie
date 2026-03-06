import { Link } from '@inertiajs/react';
import { BookOpenIcon, AwardIcon, UsersIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PublicLayout from '@/layouts/public-layout';
import type { Page } from '@/types';

interface Props {
    page: Page;
}

export default function Home({ page }: Props) {
    return (
        <PublicLayout title="Home">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5">
                <div className="w-full">
                    <div className="relative w-full overflow-hidden">
                        <img
                            src="/heroimage.jpg"
                            alt="HPIE hero"
                            className="h-[620px] w-full object-cover sm:h-[480px] md:h-[560px]"
                        />
                        <div className="absolute inset-0 bg-black/45" />
                        <div className="absolute inset-0 flex flex-col items-center justify-start px-4 pt-20 text-center text-white sm:justify-center sm:px-6 sm:pt-0 lg:px-8">
                            <h1 className="mx-auto max-w-4xl text-2xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{page.title}</h1>
                            <p className="mx-auto mt-4 max-w-3xl text-sm text-white/90 sm:mt-6 sm:text-lg">{page.content}</p>
                            <div className="mt-6 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
                                <Button asChild size="lg" className="w-full max-w-xs sm:w-auto">
                                    <Link href="/lessons">Browse Lessons</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="w-full max-w-xs border-white/70 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                                >
                                    <Link href="/about-certificate">Learn About Certificate</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-4">
                        <div className="h-full rounded-lg border p-6 text-center">
                            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
                                <BookOpenIcon className="size-6 text-primary" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">Lessons</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Lessons are designed to provide practical skills in leadership, communication, and professional development, with contributions from students, academics, and professionals across the HPIE network and beyond.
                            </p>
                            <Button asChild variant="link" className="mt-4">
                                <Link href="/lessons">View Lessons</Link>
                            </Button>
                        </div>
                        <div className="h-full rounded-lg border p-6 text-center">
                            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
                                <AwardIcon className="size-6 text-primary" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">Certificate</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Students may earn the Certificate for Professional Development by completing a curriculum-based series of core and elective lessons focused on professional skills.
                            </p>
                            <Button asChild variant="link" className="mt-4">
                                <Link href="/about-certificate">Learn More</Link>
                            </Button>
                        </div>
                        <div className="h-full rounded-lg border p-6 text-center">
                            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
                                <UsersIcon className="size-6 text-primary" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">Connecting with the HPIE Network</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Students gain access to the broader HPIE network from opportunities to engage with Harvard students, academics, and professionals through one-on-one mentorship opportunities and live guest speaker sessions.
                            </p>
                            <Button asChild variant="link" className="mt-4">
                                <Link href="/connect/one-on-one">Connect</Link>
                            </Button>
                        </div>
                        <div className="h-full rounded-lg border p-6 text-center">
                            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
                                <UsersIcon className="size-6 text-primary" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">Partner Schools</h3>
                            <p className="mt-2 text-sm text-muted-foreground"> The program is developed in collaboration with partner schools in the communities it serves to ensure that lessons remain relevant, accessible, and responsive to local needs.
                            </p>
                            <Button asChild variant="link" className="mt-4">
                                <Link href="/partners">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
