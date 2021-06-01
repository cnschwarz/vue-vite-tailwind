<template>
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img className="w-32 h-32 flex-shrink-0" :src="destination.imageUrl" :alt="destination.imageAlt" />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{{destination.city}}</h3>

        <p className="text-gray-600">{{destination.averagePrice}} / night average</p>
        <div className="mt-4">
          <a href="#" className="text-brand-dark hover:text-brand font-semibold text-sm">
            Explore {{destination.propertyCount}} properties
          </a>
        </div>
      </div>
    </div>
</template>
        
<script lang="ts">
import { defineComponent } from 'vue'
import { Destination } from '../types/destination'

export default defineComponent({
  name: 'DestinationCard',
  props: {
      destination: {
          type: Object as () => Destination,
      }
  },
  setup(props) {
    return {
      props
    };
  },
})

</script>
