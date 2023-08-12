<template>
    <Header />
    <section class="bg-gradient-to-r from-primary to-secondary text-white">
        <div class="container py-10 h-[65vh] md:h-screen flex items-end justify-start">
            <h2 class="text-5xl md:text-[7rem] max-w-[200px] md:max-w-[100%]">New-Age Education at Free University</h2>
        </div>
        <div class="w-full h-[35vh] md:h-screen">
            <video
                class="w-full h-full object-cover"
                src="https://www.shutterstock.com/shutterstock/videos/1099342533/preview/stock-footage-international-college-student-friends-talking-and-walking-out-of-university-stairway.webm"
            ></video>
        </div>
    </section>
    <section class="h-screen bg-white text-black">
        <div class="container py-10">
            <h4 class="text-6xl font-thin mb-6">Enjoy Studying</h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores distinctio in id porro? Sed repellat
                necessitatibus temporibus! Facilis nostrum nam beatae, nisi, debitis aliquid alias iusto eum tempora
                sequi labore?
            </p>
        </div>
    </section>
    <section class="h-screen bg-black text-white">
        <div class="container py-10">
            <h4 class="text-6xl font-thin mb-6">Faculties</h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores distinctio in id porro? Sed repellat
                necessitatibus temporibus! Facilis nostrum nam beatae, nisi, debitis aliquid alias iusto eum tempora
                sequi labore?
            </p>
        </div>
    </section>
    <section>
        <div class="py-10 pb-20">
            <div class="container">
                <h4 class="text-6xl font-thin mb-6">Academic Programs</h4>
                <p class="max-w-[600px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores distinctio in id porro? Sed
                    repellat necessitatibus temporibus! Facilis nostrum nam beatae, nisi, debitis aliquid alias iusto
                    eum tempora sequi labore?
                </p>
            </div>
            <div class="container flex gap-4 mt-12 mb-12">
                <div class="text-xl hover:scale-105 hover:font-bold transition-[200ms] cursor-pointer">/Bachelor</div>
                <div class="text-xl hover:scale-105 hover:font-bold transition-[200ms] cursor-pointer">/Master</div>
                <div class="text-xl hover:scale-105 hover:font-bold transition-[200ms] cursor-pointer">/PhD</div>
            </div>
            <div class="md:container flex gap-4 overflow-x-auto px-4 md:px-0">
                <AcademicCard />
                <AcademicCard />
                <AcademicCard />
            </div>
        </div>
    </section>
    <Footer />
</template>
