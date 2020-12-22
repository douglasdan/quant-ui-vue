<template>
  <div>
    <div class="page-func-bar">
      <a-button type="primary" class="editable-add-btn" @click="handleAdd">新增</a-button>
    </div>
    <a-table
      :columns="columns"
      :row-key="record => record.id"
      :data-source="rows"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
    </a-table>

    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="true"
      :visible="drawerVisible"
      @close="onClose"
    >
      <div>
        <dts-bpmn-editor></dts-bpmn-editor>
      </div>
    </a-drawer>
  </div>
  
</template>

<script>
  import DtsBpmnEditor from '@/components/bpmn/dts-bpmn-editor'

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Key',
      dataIndex: 'key',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '租户',
      dataIndex: 'tenantId',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '流程ID',
      dataIndex: 'prcessId',
    },
    {
      title: '版本',
      dataIndex: 'version',
    },
  ];

  export default {
    components:{DtsBpmnEditor},
    data() {
      return {
        rows: [],
        pagination: {},
        loading: false,
        columns,

        drawerVisible: false,
        process: {}
      };
    },
    mounted() {
    },
    methods: {
      handleTableChange(pagination, filters, sorter) {
        console.log(pagination);
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },
      loadData(params = {}) {
        
      },
      handleAdd(){
        this.drawerVisible = true
      },
      onClose() {
        this.drawerVisible = false;
      }
    },
  }
</script>
