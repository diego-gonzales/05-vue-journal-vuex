
export default {
    name: 'DaybookLayout',
    component: () => import(/* webpackChunkName: "DaybookLayout" */ '@/modules/daybook/layouts/DaybookLayout.vue'),
    children: [
        {
            path: '',
            name: 'NoEntrySelected',
            component: () => import(/* webpackChunkName: "NoEntrySelected" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: 'entry/:id',
            name: 'Entry-Detail',
            component: () => import(/* webpackChunkName: "EntryDetailPage" */ '../views/EntryView.vue')
        },
        {
            path: '',
            redirect: { name: 'NoEntrySelected' }
        }
    ]
}