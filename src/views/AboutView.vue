<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: "HTML",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
          status: "Advanced",
        },
        {
          id: 2,
          name: "CSS",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
          status: "Advanced",
        },
        {
          id: 3,
          name: "PHP",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
          status: "Intermediate",
        },
        {
          id: 4,
          name: "Javascript",
          imageUrl:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
          status: "Intermediate",
        },

        {
          id: 5,
          name: "ReactJS",
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          status: "Beginner",
        },
        {
          id: 6,
          name: "Angular",
          imageUrl:
            "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif",
          status: "Advanced",
        },
        {
          id: 7,
          name: "Express.js",
          imageUrl:
            "https://img.icons8.com/?size=100&id=z228V7A9QyTv&format=png&color=000000",
          status: "Intermediate",
        },
        {
          id: 8,
          name: "Typescript",
          imageUrl:
            "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
          status: "Intermediate",
        },

        {
          id: 9,
          name: "Vue.js",
          imageUrl:
            "https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000",
          status: "Beginner",
        },
        {
          id: 10,
          name: "Node.js",
          imageUrl:
            "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
          status: "Intermediate",
        },
        {
          id: 11,
          name: "Firebase",
          imageUrl:
            "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
          status: "Intermediate",
        },
        {
          id: 12,
          name: "Google CLoud Platform",
          imageUrl:
            "https://img.icons8.com/?size=100&id=fpGM2cINbbu4&format=png&color=000000",
          status: "Beginner",
        },
      ],
      tools: [
        {
          id: 1,
          name: "GitHub",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          status: "Version Control",
        },

        {
          id: 2,
          name: "MySQL",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
          status: "Database",
        },
        {
          id: 3,
          name: "Tailwind CSS",
          imageUrl:
            "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
          status: "UI Library",
        },
        {
          id: 4,
          name: "Bootstrap",
          imageUrl:
            "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
          status: "Ui Library",
        },
        {
          id: 5,
          name: "Google Fonts",
          imageUrl:
            "https://img.icons8.com/?size=100&id=uY6QHPV8g5bd&format=png&color=000000",
          status: "Assets",
        },
        {
          id: 6,
          name: "Google Apps Script",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg",
          status: "Automation",
        },
        {
          id: 7,
          name: "Visual Studio Code",
          imageUrl:
            "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000",
          status: "IDE",
        },
        {
          id: 8,
          name: "Figma",
          imageUrl:
            "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
          status: "Design UI/UX",
        },
        {
          id: 9,
          name: "Firestore",
          imageUrl:
            "https://img.icons8.com/?size=100&id=SQEEoDcpUD6c&format=png&color=000000",
          status: "NoSQL Database",
        },
        {
          id: 10,
          name: "phpMyAdmin",
          imageUrl:
            "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phpmyadmin-icon.png",
          status: "Database Management",
        },
        {
          id: 11,
          name: "Postman",
          imageUrl:
            "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
          status: "API Testing",
        },
        {
          id: 11,
          name: "Swagger",
          imageUrl:
            "https://img.icons8.com/?size=100&id=rdKV2dee9wxd&format=png&color=000000",
          status: "API Documentation and Testing",
        },
      ],
      experience: [
        {
          id: 1,
          company: "WORQ Coworking Space",
          position: "Intern IT (Software)",
          logo: "https://worq.space/wp-content/uploads/2022/11/logo-footer.webp",
          duration: "23/12/2024 - 11/4/2025",
        },
        {
          id: 1,
          company: "WORQ Coworking Space",
          position: "Junior Software Engineer",
          logo: "https://worq.space/wp-content/uploads/2022/11/logo-footer.webp",
          duration: "21/4/2025 - 12/9/2025",
        },
      ],
    };
  },
};
</script>
<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5"
  >
    <article data-page="about">
      <header>
        <div
          class="flex items-center mb-5 text-2xl font-bold text-white fadein-bot title-section"
        >
          About Me &nbsp;
          <div
            class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
      </header>

      <section
        class="flex flex-col gap-4 text-sm text-justify md:text-lg md:flex-row md:gap-8 md:justify-left md:items-center"
      >
        <div class="flex justify-center w-1/4">
          <img
            class="w-full mb-3 rounded-full fadein-up"
            src="https://iili.io/K9rhiqN.jpg"
            alt="Foto"
          />
        </div>
        <div class="md:w-7/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1">
            Hi everyone! I’m <strong>Dayang Nur Nazihah binti M Roslan</strong>,
            a Computer Science graduate from UTM Kuala Lumpur, where I
            maintained a <strong>3.96 CGPA</strong> throughout my diploma. My
            academic journey is driven by a deep interest in programming and
            development, with practical experience in Full Stack Web
            Development.
          </p>
          <p class="mb-3 fadein-left fadeins-2">
            Throughout my studies in computer science, I discovered my true
            passion for software engineering, especially web development. While
            I had learned basic coding from a young age, it wasn't until I
            entered the workforce during my internship that I truly understood
            the depth and complexity of professional development. My intense
            focus on academics had left little time to explore the practical
            applications of what I was learning, so this real-world experience
            opened up an entirely new perspective on the field.
          </p>

          <p class="mb-3 fadein-left fadeins-2">
            I began my development career as a frontend developer working on an
            enterprise resource planning project. My experience expanded
            significantly when I was assigned as the sole developer for a KPI
            management system, which required me to transition into full stack
            development. Since then, I've worked on multiple full stack
            projects, primarily using Angular, TypeScript, and Express as my
            core tech stack.
          </p>
        </div>
      </section>
    </article>
  </div>

  <div class="px-5 py-5 mx-3 text-left md:px-12 md:py-10 text-amber-50">
    <article data-page="about">
      <header>
        <div
          class="flex items-center mb-5 text-2xl font-bold text-white fadein-bot title-section"
        >
          <div
            class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul
            class="flex flex-wrap mb-5 text-sm font-medium text-center text-gray-500 dark:text-gray-400"
          >
            <li class="mr-2">
              <button
                class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{
                  'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1,
                }"
                @click="activeTab = 1"
              >
                Tech Stack
              </button>
            </li>
            <li class="mr-2">
              <button
                class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{
                  'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2,
                }"
                @click="activeTab = 2"
              >
                Tools
              </button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div v-for="item in tech" :key="item.id">
              <div
                class="flex items-center gap-2 px-2 py-2 border rounded cursor-pointer item-tech border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                >
                  <img
                    alt="HTML"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl"
                    style="color: transparent"
                  />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div
                    class="font-medium transition-all duration-300 translate-y-0 tech text-secondary"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm text-wrap"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div v-for="item in tools" :key="item.id">
              <div
                class="flex items-center gap-2 px-2 py-2 border rounded cursor-pointer item-tech border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                >
                  <img
                    alt="HTML"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl"
                    style="color: transparent"
                  />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div
                    class="font-medium transition-all duration-300 translate-y-0 tech text-secondary"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm w-48 text-wrap"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header>
        <div
          class="flex items-center mb-5 text-2xl font-bold text-white fadein-bot title-section"
        >
          <div
            class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
          &nbsp; Experience
        </div>
      </header>
      <section>
        <div>
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div v-for="item in experience" :key="item.id" class="col-span-2">
              <div
                class="flex items-center gap-2 px-2 py-2 border rounded cursor-pointer item-tech border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
              >
                <div
                  class="flex items-center justify-center w-24 h-24 p-0 lg:h-24 lg:w-32 lg:p-2 zoom-in"
                >
                  <img
                    alt="HTML"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.logo"
                    style="color: transparent"
                  />
                </div>
                <div
                  class="flex flex-col items-start text-sm md:text-base lg:text-lg"
                >
                  <div
                    class="font-medium transition-all duration-300 translate-y-0 text-secondary"
                  >
                    {{ item.company }}
                  </div>
                  <div
                    class="text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm text-wrap"
                  >
                    {{ item.position }}
                  </div>
                  <div
                    class="text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm text-wrap"
                  >
                    {{ item.duration }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}
</style>
