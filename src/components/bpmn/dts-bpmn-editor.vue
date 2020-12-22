<template>
  <div ref="container" class="content">
    <div ref="canvas" class="canvas" />
    <div ref="propertiesPanel" class="properties-panel-parent" />
  </div>
</template>
  
  <script>

    import BpmnModeler from 'bpmn-js/lib/Modeler'
    import propertiesPanelModule from 'bpmn-js-properties-panel'
    import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
    import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'
    import miniMapModule from 'diagram-js-minimap'
  
    import { bpmnXmlStr } from '@/mock/bpmn'

    export default {
      name: 'dts-bpmn-editor',
      props: {
        url: {
          type: String,
          required: false
        }
      },
      data: function() {
        return {
            bpmnModeler: null,
            container: null,
            canvas: null,

            diagramXML: null,
            panelVisible: false
        };
      },
      mounted: function () {

        const canvas = this.$refs.canvas
  
        this.bpmnModeler = new BpmnModeler({
            container: canvas,
            //添加控制板
            propertiesPanel: {
              parent: this.$refs.propertiesPanel
            },
            additionalModules: [
              // 左边工具栏以及节点
              propertiesProviderModule,
              // 右边的工具栏
              propertiesPanelModule,
              miniMapModule,
            ],
            moddleExtensions: {
                camunda: camundaModdleDescriptor
            },
            keyboard: {
              bindTo: document
            }
        })
  
        if (this.url) {
          this.fetchDiagram(this.url);
        }
        else {
          this.diagramXML = bpmnXmlStr
        }
      },
      beforeDestroy: function() {
        this.bpmnModeler.destroy();
      },
      watch: {
        url: function(val) {
          this.$emit('loading');
          this.fetchDiagram(val);
        },
        diagramXML: function(val) {
          this.bpmnModeler.importXML(val, (err) => {
            if (err) {
                console.error(err)
            }
            else {
                this.loadSuccess()
            }
          });
        }
      },
      methods: {
        fetchDiagram: function(url) {
          var self = this;
          fetch(url)
            .then(function(response) {
              return response.text();
            })
            .then(function(text) {
              self.diagramXML = text;
            })
            .catch(function(err) {
              self.$emit('error', err);
            });
        },
        loadSuccess() {
            this.addEventBusListener()
        },
        addEventBusListener() {
            // 监听 element
            let that = this
            const eventBus = this.bpmnModeler.get('eventBus')
            const eventTypes = ['element.click', 'element.changed', 'element.updateLabel']
            eventTypes.forEach(function(eventType) {
              eventBus.on(eventType, function(e) {
                console.log(eventType)
                if (!e || e.element.type == 'bpmn:Process') return
                if (eventType === 'element.changed') {
                  that.elementChanged(e)
                } else if (eventType === 'element.click') {
                  console.log('点击了element', e)
                  if (e.element.type === 'bpmn:Task') {
                    console.log('bpmn:Task')
                  }
                } else if (eventType === 'element.updateLabel') {
                  console.log('element.updateLabel', e.element)
                }
              })
            })
        },
        onPanelClose() {
          
        }
      }
    };
  </script>
  
  <style rel="stylesheet/scss" lang="scss">
    @import "~@/styles/bpmn.scss";
  </style>
  