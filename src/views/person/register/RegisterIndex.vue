<template>
  <div class="table-box">
    <TablePro ref="proTable" :columns="columns" :request-api="getTableList" :init-param="initParam"
      :data-callback="dataCallback">
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button type="primary" link :icon="EditPen">编辑</el-button>
        <el-button type="primary" link :icon="Refresh">关闭链接</el-button>
      </template>
    </TablePro>
  </div>
</template>

<script setup lang="tsx" name="useTablePro">
import { ElMessage, ElMessageBox } from "element-plus";
import { CirclePlus, Delete, EditPen, Download, Upload, View, Refresh } from "@element-plus/icons-vue";

import type { User } from "@/api/interface";
import type { TableProInstance, ColumnProps } from "@/components/TablePro/interface";
import { queryList } from "@/api/modules/person";

const router = useRouter();

// 表格配置项
const columns = reactive<ColumnProps<User.ResUserList>[]>([
  { type: "sort", label: "排序", width: 80 },
  { prop: "inviteCode", label: "关联方编号", search: { el: "input" }, },
  { prop: "inviteName", label: "关联方名称", search: { el: "input" }, },
  { prop: "expand3", label: "邀请时间", },
  { prop: "inviteValidity", label: "邀请截止时间", },
  { prop: "expand", label: "邀请人", },
  { prop: "inviteType", label: "类型", },
  { prop: "expand", label: "关联方角色", },
  { prop: "expand", label: "邀请链接", },
  { prop: "statusCode", label: "状态", search: { el: "select" }, },
  { prop: "action", label: "操作", fixed: "right", width: 230 }
]);

// 如果表格需要初始化请求参数，直接定义传给 TablePro (之后每次请求都会自动带上该参数，此参数更改之后也会一直带上，改变此参数会自动刷新表格数据)
const initParam = reactive({});
// TablePro 实例
const proTable = ref<TableProInstance>();

// 如果你想在请求之前对当前请求参数做一些操作，可以自定义如下函数：params 为当前所有的请求参数（包括分页），最后返回请求列表接口
// 默认不做操作就直接在 TablePro 组件上绑定	:requestApi="getUserList"
const getTableList = (params: any) => {
  let newParams = JSON.parse(JSON.stringify(params));
  return queryList(newParams);
};

// dataCallback 是对于返回的表格数据做处理，如果你后台返回的数据不是 list && total && pageNum && pageSize 这些字段，可以在这里进行处理成这些字段
// 或者直接去 hooks/useTable.ts 文件中把字段改为你后端对应的就行
const dataCallback = (data: any) => {
  return {
    list: data.list,
    total: data.total,
    pageNum: data.pageNum,
    pageSize: data.pageSize
  };
};

// 跳转详情页
const toDetail = () => {
  router.push(`/`);
};
</script>
