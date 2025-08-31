// ==================================================
//   ملف التحكم بالإعلانات - Zakhrafa Pro
// ==================================================
//   تعليمات:
//   1. احصل على شفرة الإعلان من الشبكة الإعلانية.
//   2. الصق الشفرة كاملة بين علامتي التنصيص المائلة (` `).
//   3. لا تحذف علامتي التنصيص المائلة (` `).
//   مثال: ad1: `<script>...</script>`,
// ==================================================

const adSlots = {
    
    // الإعلان رقم 1: يظهر أعلى الصفحة
    ad1: `
        <!-- الصق شفرة الإعلان 1 هنا -->
        <div class="h-24 bg-slate-200 dark:bg-slate-700 flex items-center justify-center rounded-lg"><p class="text-slate-500">مساحة إعلانية 1</p></div>
    `,

    // الإعلان رقم 2: يظهر داخل قسم "مولد الخطوط"
    ad2: `
        <!-- الصق شفرة الإعلان 2 هنا -->
        <div class="h-24 bg-slate-200 dark:bg-slate-700 flex items-center justify-center rounded-lg"><p class="text-slate-500">مساحة إعلانية 2</p></div>
    `,

    // الإعلان رقم 3: يظهر داخل قسم "أسماء اللاعبين"
    ad3: `
        <!-- الصق شفرة الإعلان 3 هنا -->
        <div class="h-24 bg-slate-200 dark:bg-slate-700 flex items-center justify-center rounded-lg"><p class="text-slate-500">مساحة إعلانية 3</p></div>
    `,

    // الإعلان رقم 4: يظهر في قسم "النقوش" قبل مولد الأسماء
    ad4: `
        <!-- الصق شفرة الإعلان 4 هنا -->
        <div class="h-24 bg-slate-200 dark:bg-slate-700 flex items-center justify-center rounded-lg"><p class="text-slate-500">مساحة إعلانية 4</p></div>
    `,

    // الإعلان رقم 5: يظهر في قسم "النقوش" بعد مولد الأسماء
    ad5: `
        <!-- الصق شفرة الإعلان 5 هنا -->
        <div class="h-24 bg-slate-200 dark:bg-slate-700 flex items-center justify-center rounded-lg"><p class="text-slate-500">مساحة إعلانية 5</p></div>
    `,

    // الإعلان رقم 6: يظهر في قسم "النقوش" قبل مكتبة الرموز
    ad6: `
        <!-- الصق شفرة الإعلان 6 هنا -->
        <div class="h-24 bg-slate-200 dark:bg-slate-700 flex items-center justify-center rounded-lg"><p class="text-slate-500">مساحة إعلانية 6</p></div>
    `,

    // الإعلان رقم 7: يظهر أسفل الصفحة
    ad7: `
        <!-- الصق شفرة الإعلان 7 هنا -->
        <div class="h-24 bg-slate-200 dark:bg-slate-700 flex items-center justify-center rounded-lg"><p class="text-slate-500">مساحة إعلانية 7</p></div>
    `
};
