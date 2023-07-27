<script setup lang="ts">
const isOpen = ref(false)
const appConfig = useAppConfig()

</script>

<template>
  <header class="fixed top-0 left-0 right-0 py-2 z-10 backdrop-filter backdrop-blur-[16px] bg-white/80 dark:bg-gray-950/80 border-gray-200 dark:border-gray-900/70">
    <div class="container flex mx-auto flex-row items-center px-2">
      <!-- Head 1/3 -->
      <ClientOnly>
        <div class="flex flex-1 space-x-4 flex-row items-center justify-start">

          <div>
            <UTooltip text="העבודה הגדולה האחת">
              <UButton
                :icon="'i-heroicons-scale-solid'"
                size="2xl"
                aria-label="Theme"
                @click="isOpen = true"
              />
              <UModal v-model="isOpen">
                <!-- Content -->
                <UContainer class="pt-8">
                  <div class="mx-auto w-36 h-36 md:w-42 md:h-42 lg:w-40 lg:h-40 bg-[url('/img/togw-logomark-app-black-on-white.jpg')] dark:bg-[url('/img/togw-logomark-app-white-on-zinc.jpg')] bg-contain" />

                  <UBadge :label="appConfig.version" color="red" size="xs" class="absolute top-4 end-4" />

                  <h1 class="text-center text-3xl font-black text-zinc-900 dark:text-zinc-200 pt-4">
                    העבודה הגדולה האחת
                  </h1>
                  <span class="text-sm text-center text-gray-600 dark:text-gray-300 tracking-wide block mt-2">
                    האתר הרשמי של קבוצת העבודה הגדולה
                  </span>
                  
                  <hr class="my-4 border-l-zinc-100 dark:border-zinc-900"/>
                  
                  <div class="flex flex-col md:flex-row max-w-xl text-gray-600 dark:text-gray-400">
                    <p class="flex-1 p-2">
                      <span class="font-semibold tracking-wide text-black dark:text-white">העבודה הגדולה</span>
                       מתמצה בניסיון להביא אנשים להכרה שעליהם לזנוח את הדתות השקריות שבהן הם מאמינים - 
                      האמונות השקריות והדוגמטיות המונעות את התפתחות התודעה, עקב מניעת קבלתו של ידע
                      <a href="https://t.me/therealnaturallaw/4" alt="החוק הטבעי האמיתי" class="text-primary-700 dark:text-primary-500" >
                        החוק הטבעי האמיתי
                      </a>
                      והבנתו.
                    </p>

                    <p class="flex-1 p-2">
                      <span class="font-semibold tracking-wide text-black dark:text-white">האחת</span>,
                       כי המשימה המפרכת הזו מהווה גם את 
                       <a href="https://t.me/therealnaturallaw/127" alt="הפתרון היחיד לשיעבוד" class="text-primary-700 dark:text-primary-500" >
                        הפתרון היחיד
                      </a>
                       שאם כל אחד ואחת מאיתנו נבחר לפעול למענו, נוכל ביחד לממש שינוי אמיתי ולייצר מציאות של אמת, מוסר, חופש ואהבה.
                    </p>
                  </div>

                  <NuxtLink to="https://t.me/lexxrex" target="_blank" class="flex justify-center mx-auto mt-4 mb-4 font-thin text-xs text-gray-500">
                    <!-- Made with 🧠 from ❤️ for ⚖️ by Lex -->
                    Made with ❤️ by Lex
                    <!-- נוצר מ- ❤️ ע"י לקס -->
                  </NuxtLink>
                </UContainer>
              </UModal>
            </UTooltip>
          </div>
        </div>
      </ClientOnly>

      <!-- Head 3/3 -->
      <div class="flex flex-1 flex-row items-center justify-end">
        <UTooltip text="ללמוד">
          <UButton
            :icon="'i-heroicons-bolt-solid'"
            to="/welcome#hero"
            size="xl"
            class="ms-1 me-1"
            aria-label="Theme"
          />
        </UTooltip>
        <UTooltip text="לשתף">
          <UButton
            :icon="'i-heroicons-camera-solid'"
            to="/welcome#media"
            class="me-1"
            size="xl"
            aria-label="Theme"
          />
        </UTooltip>

        <UTooltip text="מצב צבע" class="ms-1">
          <ColorModeButton/>
        </UTooltip>
      </div>
    </div>
  </header>
</template>
