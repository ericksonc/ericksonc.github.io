import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-us" }, _attrs))}><div class="bg-backgroundOffsetLight py-14 mb-12 border-b border-accentOmnicaBlue/10"><div class="max-w-4xl mx-auto px-5"><h1 class="text-accentOmnicaBlue mb-3 text-center text-4xl md:text-5xl font-light tracking-wider-custom">About Us</h1><div class="w-20 h-1 bg-accentOmnicaBlue mx-auto rounded-full mb-6"></div><p class="text-textSecondary text-center max-w-2xl mx-auto text-lg"> Building the bridge between enterprise data and actionable AI-powered insights </p></div></div><div class="max-w-4xl mx-auto px-5 pb-12"><div class="grid md:grid-cols-3 gap-8 mb-16"><div class="mission-card md:col-span-3 bg-backgroundOffsetLight p-6 rounded-lg border-l-4 border-accentOmnicaBlue shadow-sm hover:shadow-md transition-shadow"><div class="flex items-center mb-4"><div class="w-12 h-12 flex-shrink-0 rounded-full bg-accentOmnicaBlue/10 flex items-center justify-center mr-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accentOmnicaBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><h2 class="text-2xl font-sans font-light text-textPrimary">Our Mission: Empowering Enterprise Intelligence</h2></div><p class="text-textSecondary leading-relaxed pl-16"> At Omnica, our mission is simple: to empower enterprises with truly actionable AI. We believe in transforming complex data not just into information, but into strategic assets that drive smarter decisions and measurable growth. We forge pathways to new possibilities by making sophisticated AI practical and impactful. </p></div></div><div class="grid md:grid-cols-2 gap-8 mb-16"><div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-accentOmnicaBlue/10"><div class="flex items-center mb-4"><div class="w-10 h-10 flex-shrink-0 rounded-full bg-accentOmnicaBlue/10 flex items-center justify-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accentOmnicaBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div><h2 class="text-xl font-sans font-medium text-textPrimary">Our Foundation: Expertise &amp; Innovation</h2></div><p class="text-textSecondary leading-relaxed"> Omnica was founded by seasoned professionals drawing from extensive experience at Google and in global enterprise. Our team combines deep expertise in AI/ML, enterprise-grade data architecture, Generative AI development, and strategic business solutions. </p><p class="text-textSecondary leading-relaxed mt-3"> This foundation allows us to tackle critical information and decision-making gaps with innovative, robust, and real-world solutions. </p></div><div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-accentOmnicaBlue/10"><div class="flex items-center mb-4"><div class="w-10 h-10 flex-shrink-0 rounded-full bg-accentOmnicaBlue/10 flex items-center justify-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accentOmnicaBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg></div><h2 class="text-xl font-sans font-medium text-textPrimary">Our Approach: Partnership &amp; Outcomes</h2></div><p class="text-textSecondary leading-relaxed"> We partner closely with organizations to co-create tailored AI-powered intelligence. Our focus is on understanding your unique challenges and delivering practical, integrated solutions that demonstrably work and provide a distinct strategic advantage. </p><p class="text-textSecondary leading-relaxed mt-3"> For us, AI is a powerful enabler, best leveraged to achieve tangible business outcomes. </p></div></div><div class="bg-backgroundOffsetLight p-8 rounded-lg text-center border border-accentOmnicaBlue/20"><h3 class="text-xl font-sans font-medium text-textPrimary mb-3">Meet Our Team</h3><p class="text-textSecondary italic mb-6">Our founding team profiles are coming soon</p><div class="w-20 h-1 bg-accentOmnicaBlue/30 mx-auto rounded-full"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aboutUs as default };
//# sourceMappingURL=about-us.vue.mjs.map
