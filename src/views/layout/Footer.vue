<template>
<footer class="bg-gray-100 dark:bg-dark-mode-difest">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <router-link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo-himpunan.png" class="h-8" alt="Logo HIMATIKOM" />
                <img src="/difest.png" class="h-8" alt="Logo DIFEST" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DIFEST 5.0</span>
            </router-link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-400 sm:mx-auto dark:border-white lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {{  new Date().getFullYear()  }} <a href="#" class="hover:underline">Digital Festival</a>. All Rights Reserved.</span>
    </div>
</footer>
</template>