<template>
    <div class="grid md:grid-cols-2 grid-cols-1">
        <div class="image order-2" :class="imagePositionClass"></div>
        <div class="content order-1" :class="contentClass"></div>
    </div>
</template>

<script>
export default {
    name: "SectionContentImage",
    props: {
        imagePosition: {
            type: String
        }
    },

    computed: {
        imagePositionClass() {
            if (this.imagePosition === 'left') {
                return 'md:order-1'
            } else{ 
                 return 'md:order-2'
            }
        },
        contentClass() {
            if (this.imagePosition === 'right') {
                return 'md:order-1'
            } else{ 
                 return 'md:order-2'
            }
        },

        classElement() {
            output = {};

            if (this.imagePosition === 'right') {
               output.image = 'md:order-1';
               output.content = 'md:order-2';
            } else{ 
                  output.image = 'md:order-1';
               output.content = 'md:order-2';
            }
            return output
        },

        classElement1() {
            output = {};

            if (this.imagePosition === 'right') {
               output.image = 'md:order-1';
               output.content = 'md:order-2';
            } else if (this.imagePosition === 'right') { 
                  output.image = 'md:order-1';
               output.content = 'md:order-2';
            } else if (this.imagePosition === 'top') { 
                  output.image = 'md:order-1 col-span-2';
               output.content = 'md:order-2 col-span-2';
            }
            return output;
        }
    }
}
</script>

<section-content-image :image-position="item.imagePosition"