import type { TableProps } from '@vben/common-ui';

interface RowVO {
  address: string;
  age: number;
  audio: string;
  id: number;
  image: string;
  name: string;
  role: string;
  sex: string;
  video: string;
}

export const defaultTableConfig: TableProps<RowVO> = {
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    {
      field: 'image',
      slots: {
        default: 'image',
      },
      title: '图片',
      width: 80,
    },
    {
      align: 'center',
      field: 'audio',
      slots: {
        default: 'audio',
      },
      title: '音频',
      width: 80,
    },
    {
      align: 'center',
      field: 'video',
      slots: {
        default: 'video',
      },
      title: '视频',
      width: 80,
    },

    {
      align: 'center',
      field: 'operate',
      params: [
        {
          buttonType: 'primary',
          icon: 'lucide:clipboard-pen-line',
          title: '详情/编辑',
        },
        {
          buttonType: 'danger',
          icon: 'lucide:trash-2',
          popconfirm: {
            cancelText: '取消',
            enabled: true,
            okText: '确定',
            placement: 'bottomLeft',
            title: '您确定要删除吗？',
          },
          title: '删除',
        },
      ],
      slots: {
        default: 'operate',
      },
      title: '操作',
      width: 80,
    },
  ],
  data: [
    {
      address: 'test abc',
      age: 28,
      audio:
        'https://xzwad.ixapp.cn/upload/2024/06/28/d3ded6910de448eb8ce8524d55e9ac5f.ogg',
      id: 10_001,
      image:
        'https://ldwh.oss-cn-hangzhou.aliyuncs.com/ldwh_app/uni/dict/dict_zhao.png',
      name: 'Test1',
      role: 'Develop',
      sex: 'Man',
      video:
        'https://ldwh.oss-cn-hangzhou.aliyuncs.com/2024/09/05/f4a81d59-24b3-4ed7-93e3-d616aef27f9f.mp4',
    },
  ],
  formConfig: {
    data: {
      age: '',
      buttonGroup: '',
      name: 'Test',
      nickname: '',
      sex: '',
      tab: '',
    },
    enabled: true,
    extraButton: [
      {
        props: { size: 'middle', type: 'primary' },
        title: '新增操作',
        type: 'addDetail',
      },
    ],
    items: [
      {
        field: 'buttonGroup',
        itemRender: {
          options: [
            { title: '拼音', value: 'pinyin' },
            { title: '拼音1', value: 'pinyin1' },
            { title: '拼音2', value: 'pinyin2' },
          ],
        },
        padding: false,
        slots: {
          default: 'buttonGroup',
        },
        span: 24,
        title: '',
      },
      {
        field: 'tab',
        itemRender: {
          options: [
            { title: '拼音', value: 'pinyin' },
            { title: '拼音1', value: 'pinyin1' },
            { title: '拼音2', value: 'pinyin2' },
          ],
        },
        padding: false,
        slots: {
          default: 'tab',
        },
        span: 24,
        title: '',
      },
      {
        field: 'name',
        itemRender: { name: 'VxeInput' },
        title: '名称',
      },
      {
        field: 'sex',
        itemRender: { name: 'VxeInput' },
        title: '性别',
      },
      {
        field: 'age',
        itemRender: { name: 'VxeInput' },
        title: '年龄',
      },
      {
        slots: {
          default: 'action',
        },
      },
    ],
  },
};
