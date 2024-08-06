/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722942814", {
    template: `
    <footer id="footer-section" style="min-height: 470px"  class="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16 md:p-12 lg:p-14 rounded-lg shadow-lg">
                <hr id="footer-divider" class="my-8 border-white border-opacity-30 sm:mx-auto lg:my-10">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white hover:text-pink-200 transition duration-300">
                            <img id="footer-logo" src="https://makeinfinite-mentat-test.azurewebsites.net/get_image/tmpzmee_7hw/logo.svg" class="h-8 mr-4 sm:h-10" alt="Landwind Logo" />
                            FitBuilder: Construct Your Fitness Journey
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white text-opacity-80 hover:text-opacity-100 transition duration-300">
                        Engineered for strength. Designed for results. FitBuilder is your digital blueprint for building the body you've always wanted through custom workout plans, nutrition guidance, and progress tracking.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
