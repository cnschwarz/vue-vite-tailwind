<template>
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src="/img/logo-brand.svg" alt="Workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/img/beach-work.jpeg"
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" /> <span className="text-brand">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="inline-block px-5 py-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="#"
              >
                Book your escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/img/beach-work.jpeg"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div v-for="destination in popularDestinations" :key="destination.city">
            <DestinationCard :destination="destination"/>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import DestinationCard from './DestinationCard.vue'

export default defineComponent({
  name: 'LandingPage',
  components: {
    DestinationCard
  },
  props: {
    popularDestinations: {
        type: Array,
        default: [
          {
            city: "Toronto",
            averagePrice: 120,
            propertyCount: 76,
            imageUrl: "img/toronto.jpeg",
            imageAlt: "Toronto skyline",
          },
          {
            city: "Malibu",
            averagePrice: 215,
            propertyCount: 43,
            imageUrl: "img/malibu.jpeg",
            imageAlt: "Cliff in Malibu",
          },
          {
            city: "Chicago",
            averagePrice: 130,
            propertyCount: 115,
            imageUrl: "img/chicago.jpeg",
            imageAlt: "Chicago skyline",
          },
          {
            city: "Seattle",
            averagePrice: 135,
            propertyCount: 63,
            imageUrl: "img/seattle.jpeg",
            imageAlt: "Seattle skyline",
          },
          {
            city: "Colorado",
            averagePrice: 85,
            propertyCount: 47,
            imageUrl: "img/colorado.jpeg",
            imageAlt: "Lake in Colorado",
          },
          {
            city: "Miami",
            averagePrice: 115,
            propertyCount: 86,
            imageUrl: "img/miami.jpeg",
            imageAlt: "Beach in Miami",
          },
      ]
    }
  },
  setup(props) {
     return {
        props
      };
  },
})
</script>
