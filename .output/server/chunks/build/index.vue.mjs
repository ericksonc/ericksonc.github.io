import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _imports_0 = publicAssetsURL("/videos/bg-grayscale.mp4");

const _imports_1 = publicAssetsURL("/img/Omnica_Logo-01.png");

const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "home",
    class: "hero relative min-h-[70vh] flex items-start justify-center flex-col text-center text-gray-800 px-5"
  }, _attrs))}><video class="video-bg absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-80" autoplay loop muted playsinline><source${ssrRenderAttr("src", _imports_0)} type="video/mp4"></video><div class="logo w-full flex justify-center mt-12 mb-16"><img${ssrRenderAttr("src", _imports_1)} alt="Omnica" class="h-10"></div><div class="hero-content max-w-3xl z-[1] mx-auto"><h1 class="mb-8 font-sans font-light tracking-wider-custom leading-tight lg:text-5xl xl:text-4xl 2xl:text-5xl"><span class="text-textPrimary inline-block">Activating</span><span class="text-accentOmnicaBlue inline-block"> Enterprise Intelligence</span></h1><p class="text-lg mb-6 max-w-xl mx-auto font-sans text-textSecondary">We bridge the gap between complex enterprise data and the actionable AI-powered insights your teams need to drive growth and make smarter decisions.</p><div class="mt-8">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/solutions",
    class: "px-6 py-3 bg-accentOmnicaBlue text-white rounded-md font-sans hover:bg-accentOmnicaBlue/90 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Explore Our Approach`);
      } else {
        return [
          createTextVNode("Explore Our Approach")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "services",
    class: "services relative py-20 bg-img min-h-[500px]"
  }, _attrs))} data-v-f39936fe><div class="text-center mb-12 max-w-3xl mx-auto px-5" data-v-f39936fe><h2 class="text-white font-sans font-light mb-2 text-3xl md:text-4xl tracking-wider-custom" data-v-f39936fe>Intelligent Solutions for Complex Challenges</h2></div><div class="services-container flex justify-center gap-8 max-w-6xl mx-auto px-5 lg:flex-row flex-col" data-v-f39936fe><div class="service-card flex-1 bg-overlay rounded-lg p-8 text-white backdrop-blur-sm" data-v-f39936fe><h3 class="text-2xl md:text-3xl mb-2 text-white font-sans font-normal" data-v-f39936fe>Deep Data Synthesis</h3><h4 class="text-lg mb-5 font-sans font-normal text-accentOmnicaBlue" data-v-f39936fe>Unlocking Hidden Value</h4><p class="mb-5 leading-relaxed font-sans" data-v-f39936fe>Omnica transforms your disparate data sources into a unified, intelligent ecosystem. We go beyond surface-level views to uncover the critical connections and patterns that reveal true business opportunities.</p></div><div class="service-card flex-1 bg-overlay rounded-lg p-8 text-white backdrop-blur-sm" data-v-f39936fe><h3 class="text-2xl md:text-3xl mb-2 text-white font-sans font-normal" data-v-f39936fe>Contextual AI Insights</h3><h4 class="text-lg mb-5 font-sans font-normal text-accentOmnicaBlue" data-v-f39936fe>Intelligence That Drives Action</h4><p class="mb-5 leading-relaxed font-sans" data-v-f39936fe>Leveraging advanced AI, including Generative AI and machine learning, we deliver not just data, but deep contextual understanding – the &#39;why&#39; behind the numbers – empowering your teams with clarity.</p></div><div class="service-card flex-1 bg-overlay rounded-lg p-8 text-white backdrop-blur-sm" data-v-f39936fe><h3 class="text-2xl md:text-3xl mb-2 text-white font-sans font-normal" data-v-f39936fe>Actionable Decision Support</h3><h4 class="text-lg mb-5 font-sans font-normal text-accentOmnicaBlue" data-v-f39936fe>Empowering Smarter Outcomes</h4><p class="mb-5 leading-relaxed font-sans" data-v-f39936fe>Our solutions deliver timely, relevant intelligence directly into your workflows, enabling faster, more informed decisions that lead to measurable results.</p></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheServices.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f39936fe"]]);

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "why-omnica",
    class: "insights bg-backgroundOffsetLight text-textPrimary py-20 px-5 text-center border-y border-accentOmnicaBlue/10"
  }, _attrs))}><h2 class="mb-10 font-sans font-light tracking-wider-custom text-textPrimary">Why Omnica?</h2><div class="max-w-3xl mx-auto"><p class="font-sans text-lg text-textSecondary leading-relaxed"> Founded by ex-Google veterans with over 15 years of collective deep expertise in enterprise AI, data architecture, and delivering impactful technology solutions. Omnica combines practical innovation with a relentless focus on measurable outcomes for your business. </p></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheInsights.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHero = __nuxt_component_0;
  const _component_TheServices = __nuxt_component_1;
  const _component_TheInsights = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TheHero, null, null, _parent));
  _push(ssrRenderComponent(_component_TheServices, null, null, _parent));
  _push(ssrRenderComponent(_component_TheInsights, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
