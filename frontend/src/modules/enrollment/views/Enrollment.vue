<template>
	<div class="h-full w-full">
		<div class="flex flex-col">
			<!-- Course filters -->
			<div class="px-5 py-6 flex flex-1 flex-row flex-wrap border-b text-black">
				<div class="flex flex-1 flex-row gap-4 flex-wrap justify-between xl:justify-start">
					<Button
						type="button"
						label="Course Instance"
						icon="pi pi-graduation-cap"
						class="!px-5"
						rounded
						variant="outlined"
						severity="secondary"
					></Button>
					<Button
						type="button"
						label="Course Access"
						icon="pi pi-verified"
						class="!px-5"
						rounded
						badge="13"
						severity="secondary"
						variant="outlined"
					></Button>
					<Button
						type="button"
						label="Courses"
						variant="outlined"
						icon="pi pi-file"
						class="!px-5"
						rounded
						severity="secondary"
					></Button>
					<Button
						type="button"
						label="Educator"
						variant="outlined"
						icon="pi pi-user-edit"
						class="!px-5"
						rounded
						severity="secondary"
					></Button>
					<Button
						type="button"
						label="Registration"
						variant="outlined"
						icon="pi pi-clipboard"
						class="!px-5"
						rounded
						severity="secondary"
					></Button>
				</div>
			</div>
			<div
				class="px-5 py-5 flex flex-row flex-wrap justify-between gap-3 items-center border-b text-black"
			>
				<div class="flex flex-row gap-3 items-center flex-wrap">
					<FloatLabel class="w-full md:w-56" variant="on">
						<Select
							size="small"
							v-model="value3"
							inputId="on_label"
							:options="cities"
							optionLabel="name"
							class="w-full rounded-full"
						/>
						<label for="on_label">Status</label>
					</FloatLabel>
					<FloatLabel class="w-full md:w-56" variant="on" rounded>
						<Select
							size="small"
							v-model="value3"
							inputId="on_label"
							:options="cities"
							optionLabel="name"
							class="w-full"
						/>
						<label for="on_label">Education Entity</label> </FloatLabel
					><FloatLabel class="w-full md:w-56" variant="on" rounded>
						<Select
							size="small"
							v-model="value3"
							inputId="on_label"
							:options="cities"
							optionLabel="name"
							class="w-full"
						/>
						<label for="on_label">Academic Term</label>
					</FloatLabel>
				</div>
				<div class="flex flex-row flex-wrap gap-3 items-center">
					<Button
						type="button"
						label="Add"
						icon="pi pi-plus"
						class="!px-5"
						rounded
						variant="filled"
						severity="secondary"
						size="small"
					></Button>
					<Button
						type="button"
						label="Select"
						icon="pi pi-check-circle"
						class="!px-5"
						rounded
						variant="filled"
						severity="secondary"
						size="small"
					></Button>
					<Button
						type="button"
						label="Filter"
						icon="pi pi-filter"
						class="!px-5"
						rounded
						variant="filled"
						severity="secondary"
						size="small"
					></Button>
				</div>
			</div>
			<div class="card py-5">
				<DataTable
					v-model:filters="filters"
					:value="customers"
					paginator
					showGridlines
					:rows="10"
					dataKey="id"
					filterDisplay="menu"
					:loading="loading"
					:globalFilterFields="[
						'name',
						'country.name',
						'representative.name',
						'balance',
						'status',
					]"
				>
					<template #header>
						<div class="flex justify-between">
							<Button
								type="button"
								icon="pi pi-filter-slash"
								label="Clear"
								outlined
								@click="clearFilter()"
							/>
							<IconField>
								<InputIcon>
									<i class="pi pi-search" />
								</InputIcon>
								<InputText
									v-model="filters['global'].value"
									placeholder="Keyword Search"
								/>
							</IconField>
						</div>
					</template>
					<template #empty> No customers found. </template>
					<template #loading> Loading customers data. Please wait. </template>
					<Column field="name" header="Education Entity" style="min-width: 12rem">
						<template #body="{ data }">
							{{ data.name }}
						</template>
						<template #filter="{ filterModel }">
							<InputText
								v-model="filterModel.value"
								type="text"
								placeholder="Search by name"
							/>
						</template>
					</Column>
					<Column
						header="Course Title"
						filterField="country.name"
						style="min-width: 12rem"
					>
						<template #body="{ data }">
							<div class="flex items-center gap-2">
								<img
									alt="flag"
									src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
									:class="`flag flag-${data.country.code}`"
									style="width: 24px"
								/>
								<span>{{ data.country.name }}</span>
							</div>
						</template>
						<template #filter="{ filterModel }">
							<InputText
								v-model="filterModel.value"
								type="text"
								placeholder="Search by country"
							/>
						</template>
						<template #filterclear="{ filterCallback }">
							<Button
								type="button"
								icon="pi pi-times"
								@click="filterCallback()"
								severity="secondary"
							></Button>
						</template>
						<template #filterapply="{ filterCallback }">
							<Button
								type="button"
								icon="pi pi-check"
								@click="filterCallback()"
								severity="success"
							></Button>
						</template>
						<template #filterfooter>
							<div class="px-4 pt-0 pb-4 text-center">Customized Buttons</div>
						</template>
					</Column>
					<!-- <Column
						header="Credits"
						filterField="representative"
						:showFilterMatchModes="false"
						:filterMenuStyle="{ width: '14rem' }"
						style="min-width: 14rem"
					>
						<template #body="{ data }">
							<div class="flex items-center gap-2">
								<img
									:alt="data.representative.name"
									:src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
									style="width: 32px"
								/>
								<span>{{ data.representative.name }}</span>
							</div>
						</template>
						<template #filter="{ filterModel }">
							<MultiSelect
								v-model="filterModel.value"
								:options="representatives"
								optionLabel="name"
								placeholder="Any"
							>
								<template #option="slotProps">
									<div class="flex items-center gap-2">
										<img
											:alt="slotProps.option.name"
											:src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
											style="width: 32px"
										/>
										<span>{{ slotProps.option.name }}</span>
									</div>
								</template>
							</MultiSelect>
						</template>
					</Column> -->
					<!-- <Column
						header="Date"
						filterField="date"
						dataType="date"
						style="min-width: 10rem"
					>
						<template #body="{ data }">
							{{ formatDate(data.date) }}
						</template>
						<template #filter="{ filterModel }">
							<DatePicker
								v-model="filterModel.value"
								dateFormat="mm/dd/yy"
								placeholder="mm/dd/yyyy"
							/>
						</template>
					</Column> -->
					<Column
						header="Credits"
						filterField="balance"
						dataType="numeric"
						style="min-width: 10rem"
					>
						<template #body="{ data }">
							{{ formatCurrency(data.balance) }}
						</template>
						<template #filter="{ filterModel }">
							<InputNumber
								v-model="filterModel.value"
								mode="currency"
								currency="USD"
								locale="en-US"
							/>
						</template>
					</Column>
					<Column
						header="Status"
						field="status"
						:filterMenuStyle="{ width: '14rem' }"
						style="min-width: 12rem"
					>
						<template #body="{ data }">
							<Tag :value="data.status" :severity="getSeverity(data.status)" />
						</template>
						<template #filter="{ filterModel }">
							<Select
								v-model="filterModel.value"
								:options="statuses"
								placeholder="Select One"
								showClear
							>
								<template #option="slotProps">
									<Tag
										:value="slotProps.option"
										:severity="getSeverity(slotProps.option)"
									/>
								</template>
							</Select>
						</template>
					</Column>
					<!-- <Column
						field="activity"
						header="Action"
						:showFilterMatchModes="false"
						style="min-width: 12rem"
					>
						<template #body="{ data }">
							<ProgressBar
								:value="data.activity"
								:showValue="false"
								style="height: 6px"
							></ProgressBar>
						</template>
						<template #filter="{ filterModel }">
							<Slider v-model="filterModel.value" range class="m-4"></Slider>
							<div class="flex items-center justify-between px-2">
								<span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
								<span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
							</div>
						</template>
					</Column> -->
					<Column
						field="verified"
						header="Action"
						dataType="boolean"
						bodyClass="text-center"
						style="min-width: 8rem"
					>
						<template #body="{ data }">
							<i
								class="pi"
								:class="{
									'pi-check-circle text-green-500 ': data.verified,
									'pi-times-circle text-red-500': !data.verified,
								}"
							></i>
						</template>
						<template #filter="{ filterModel }">
							<label for="verified-filter" class="font-bold"> Verified </label>
							<Checkbox
								v-model="filterModel.value"
								:indeterminate="filterModel.value === null"
								binary
								inputId="verified-filter"
							/>
						</template>
					</Column>
				</DataTable>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	Avatar,
	Button,
	Checkbox,
	Column,
	DataTable,
	DatePicker,
	FloatLabel,
	IconField,
	InputIcon,
	InputNumber,
	InputText,
	MultiSelect,
	OverlayBadge,
	ProgressBar,
	Select,
	Slider,
	Tag,
} from 'primevue'
import { ref, onMounted } from 'vue'
// import { CustomerService } from '@/service/CustomerService'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api'

const value1 = ref(null)
const value2 = ref(null)
const value3 = ref(null)
const cities = ref([
	{ name: 'New York', code: 'NY' },
	{ name: 'Rome', code: 'RM' },
	{ name: 'London', code: 'LDN' },
	{ name: 'Istanbul', code: 'IST' },
	{ name: 'Paris', code: 'PRS' },
])

const customers = ref()
const filters = ref()
const representatives = ref([
	{ name: 'Amy Elsner', image: 'amyelsner.png' },
	{ name: 'Anna Fali', image: 'annafali.png' },
	{ name: 'Asiya Javayant', image: 'asiyajavayant.png' },
	{ name: 'Bernardo Dominic', image: 'bernardodominic.png' },
	{ name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
	{ name: 'Ioni Bowcher', image: 'ionibowcher.png' },
	{ name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
	{ name: 'Onyama Limba', image: 'onyamalimba.png' },
	{ name: 'Stephen Shaw', image: 'stephenshaw.png' },
	{ name: 'XuXue Feng', image: 'xuxuefeng.png' },
])
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'])
const loading = ref(true)

onMounted(() => {
	// CustomerService.getCustomersMedium().then((data) => {
	// 	customers.value = getCustomers(data)
	// 	loading.value = false
	// })
	customers.value = getCustomers()
	loading.value = false
})

// customers.value = JSON.parse(
// loading.value = false
const initFilters = () => {
	filters.value = {
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		name: {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
		},
		'country.name': {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
		},
		representative: { value: null, matchMode: FilterMatchMode.IN },
		date: {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
		},
		balance: {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
		},
		status: {
			operator: FilterOperator.OR,
			constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
		},
		activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
		verified: { value: null, matchMode: FilterMatchMode.EQUALS },
	}
}

initFilters()

const formatDate = (value) => {
	// return value.toLocaleDateString('en-US', {
	// 	day: '2-digit',
	// 	month: '2-digit',
	// 	year: 'numeric',
	// })
	const date = new Date(value)
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()
	return `${month}/${day}/${year}`
}
const formatCurrency = (value) => {
	return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
const clearFilter = () => {
	initFilters()
}
const getCustomers = () => {
	const data = [
		{
			id: 1000,
			name: 'James Butt',
			country: { name: 'Algeria', code: 'dz' },
			company: 'Benton, John B Jr',
			date: '2015-09-13T00:00:00.000Z',
			status: 'unqualified',
			verified: true,
			activity: 17,
			representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
			balance: 70663,
		},
		{
			id: 1001,
			name: 'Josephine Darakjy',
			country: { name: 'Egypt', code: 'eg' },
			company: 'Chanay, Jeffrey A Esq',
			date: '2019-02-09T00:00:00.000Z',
			status: 'proposal',
			verified: true,
			activity: 0,
			representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
			balance: 82429,
		},
		{
			id: 1002,
			name: 'Art Venere',
			country: { name: 'Panama', code: 'pa' },
			company: 'Chemel, James L Cpa',
			date: '2017-05-13T00:00:00.000Z',
			status: 'qualified',
			verified: false,
			activity: 63,
			representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
			balance: 28334,
		},
		{
			id: 1003,
			name: 'Lenna Paprocki',
			country: { name: 'Slovenia', code: 'si' },
			company: 'Feltz Printing Service',
			date: '2020-09-15T00:00:00.000Z',
			status: 'new',
			verified: false,
			activity: 37,
			representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
			balance: 88521,
		},
		{
			id: 1004,
			name: 'Donette Foller',
			country: { name: 'South Africa', code: 'za' },
			company: 'Printing Dimensions',
			date: '2016-05-20T00:00:00.000Z',
			status: 'proposal',
			verified: true,
			activity: 33,
			representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
			balance: 93905,
		},
		{
			id: 1005,
			name: 'Simona Morasca',
			country: { name: 'Egypt', code: 'eg' },
			company: 'Chapman, Ross E Esq',
			date: '2018-02-16T00:00:00.000Z',
			status: 'qualified',
			verified: false,
			activity: 68,
			representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
			balance: 50041,
		},
		{
			id: 1006,
			name: 'Mitsue Tollner',
			country: { name: 'Paraguay', code: 'py' },
			company: 'Morlong Associates',
			date: '2018-02-19T00:00:00.000Z',
			status: 'renewal',
			verified: true,
			activity: 54,
			representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
			balance: 58706,
		},
		{
			id: 1007,
			name: 'Leota Dilliard',
			country: { name: 'Serbia', code: 'rs' },
			company: 'Commercial Press',
			date: '2019-08-13T00:00:00.000Z',
			status: 'renewal',
			verified: true,
			activity: 69,
			representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
			balance: 26640,
		},
		{
			id: 1008,
			name: 'Sage Wieser',
			country: { name: 'Egypt', code: 'eg' },
			company: 'Truhlar And Truhlar Attys',
			date: '2018-11-21T00:00:00.000Z',
			status: 'unqualified',
			verified: true,
			activity: 76,
			representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
			balance: 65369,
		},
		{
			id: 1009,
			name: 'Kris Marrier',
			country: { name: 'Mexico', code: 'mx' },
			company: 'King, Christopher A Esq',
			date: '2015-07-07T00:00:00.000Z',
			status: 'proposal',
			verified: false,
			activity: 3,
			representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
			balance: 63451,
		},
		{
			id: 1010,
			name: 'Minna Amigon',
			country: { name: 'Romania', code: 'ro' },
			company: 'Dorl, James J Esq',
			date: '2018-11-07T00:00:00.000Z',
			status: 'qualified',
			verified: false,
			activity: 38,
			representative: { name: 'Anna Fali', image: 'annafali.png' },
			balance: 71169,
		},
		{
			id: 1011,
			name: 'Abel Maclead',
			country: { name: 'Singapore', code: 'sg' },
			company: 'Rangoni Of Florence',
			date: '2017-03-11T00:00:00.000Z',
			status: 'qualified',
			verified: true,
			activity: 87,
			representative: { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
			balance: 96842,
		},
		{
			id: 1012,
			name: 'Kiley Caldarera',
			country: { name: 'Serbia', code: 'rs' },
			company: 'Feiner Bros',
			date: '2015-10-20T00:00:00.000Z',
			status: 'unqualified',
			verified: false,
			activity: 80,
			representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
			balance: 92734,
		},
		{
			id: 1013,
			name: 'Graciela Ruta',
			country: { name: 'Chile', code: 'cl' },
			company: 'Buckley Miller & Wright',
			date: '2016-07-25T00:00:00.000Z',
			status: 'negotiation',
			verified: false,
			activity: 59,
			representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
			balance: 45250,
		},
		{
			id: 1014,
			name: 'Cammy Albares',
			country: { name: 'Philippines', code: 'ph' },
			company: 'Rousseaux, Michael Esq',
			date: '2019-06-25T00:00:00.000Z',
			status: 'new',
			verified: true,
			activity: 90,
			representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
			balance: 30236,
		},
		{
			id: 1015,
			name: 'Mattie Poquette',
			country: { name: 'Venezuela', code: 've' },
			company: 'Century Communications',
			date: '2017-12-12T00:00:00.000Z',
			status: 'negotiation',
			verified: false,
			activity: 52,
			representative: { name: 'Anna Fali', image: 'annafali.png' },
			balance: 64533,
		},
		{
			id: 1016,
			name: 'Meaghan Garufi',
			country: { name: 'Malaysia', code: 'my' },
			company: 'Bolton, Wilbur Esq',
			date: '2018-07-04T00:00:00.000Z',
			status: 'unqualified',
			verified: false,
			activity: 31,
			representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
			balance: 37279,
		},
		{
			id: 1017,
			name: 'Gladys Rim',
			country: { name: 'Netherlands', code: 'nl' },
			company: 'T M Byxbee Company Pc',
			date: '2020-02-27T00:00:00.000Z',
			status: 'renewal',
			verified: true,
			activity: 48,
			representative: { name: 'Stephen Shaw', image: 'stephenshaw.png' },
			balance: 27381,
		},
		{
			id: 1018,
			name: 'Yuki Whobrey',
			country: { name: 'Israel', code: 'il' },
			company: 'Farmers Insurance Group',
			date: '2017-12-21T00:00:00.000Z',
			status: 'negotiation',
			verified: true,
			activity: 16,
			representative: { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
			balance: 9257,
		},
		{
			id: 1019,
			name: 'Fletcher Flosi',
			country: { name: 'Argentina', code: 'ar' },
			company: 'Post Box Services Plus',
			date: '2016-01-04T00:00:00.000Z',
			status: 'renewal',
			verified: true,
			activity: 19,
			representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
			balance: 67783,
		},
		{
			id: 1020,
			name: 'Bette Nicka',
			country: { name: 'Paraguay', code: 'py' },
			company: 'Sport En Art',
			date: '2016-10-21T00:00:00.000Z',
			status: 'renewal',
			verified: false,
			activity: 100,
			representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
			balance: 4609,
		},
		{
			id: 1021,
			name: 'Veronika Inouye',
			country: { name: 'Ecuador', code: 'ec' },
			company: 'C 4 Network Inc',
			date: '2017-03-24T00:00:00.000Z',
			status: 'renewal',
			verified: false,
			activity: 72,
			representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
			balance: 26565,
		},
		{
			id: 1022,
			name: 'Willard Kolmetz',
			country: { name: 'Tunisia', code: 'tn' },
			company: 'Ingalls, Donald R Esq',
			date: '2017-04-15T00:00:00.000Z',
			status: 'renewal',
			verified: true,
			activity: 94,
			representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
			balance: 75876,
		},
		{
			id: 1023,
			name: 'Maryann Royster',
			country: { name: 'Belarus', code: 'by' },
			company: 'Franklin, Peter L Esq',
			date: '2017-03-11T00:00:00.000Z',
			status: 'qualified',
			verified: false,
			activity: 56,
			representative: { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
			balance: 41121,
		},
		{
			id: 1024,
			name: 'Alisha Slusarski',
			country: { name: 'Iceland', code: 'is' },
			company: 'Wtlz Power 107 Fm',
			date: '2018-03-27T00:00:00.000Z',
			status: 'qualified',
			verified: true,
			activity: 7,
			representative: { name: 'Stephen Shaw', image: 'stephenshaw.png' },
			balance: 91691,
		},
		{
			id: 1025,
			name: 'Allene Iturbide',
			country: { name: 'Italy', code: 'it' },
			company: 'Ledecky, David Esq',
			date: '2016-02-20T00:00:00.000Z',
			status: 'qualified',
			verified: true,
			activity: 1,
			representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
			balance: 40137,
		},
		{
			id: 1026,
			name: 'Chanel Caudy',
			country: { name: 'Argentina', code: 'ar' },
			company: 'Professional Image Inc',
			date: '2018-06-24T00:00:00.000Z',
			status: 'new',
			verified: true,
			activity: 26,
			representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
			balance: 21304,
		},
		{
			id: 1027,
			name: 'Ezekiel Chui',
			country: { name: 'Ireland', code: 'ie' },
			company: 'Sider, Donald C Esq',
			date: '2016-09-24T00:00:00.000Z',
			status: 'new',
			verified: false,
			activity: 76,
			representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
			balance: 60454,
		},
		{
			id: 1028,
			name: 'Willow Kusko',
			country: { name: 'Romania', code: 'ro' },
			company: 'U Pull It',
			date: '2020-04-11T00:00:00.000Z',
			status: 'qualified',
			verified: true,
			activity: 7,
			representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
			balance: 17565,
		},
		{
			id: 1029,
			name: 'Bernardo Figeroa',
			country: { name: 'Israel', code: 'il' },
			company: 'Clark, Richard Cpa',
			date: '2018-04-11T00:00:00.000Z',
			status: 'renewal',
			verified: true,
			activity: 81,
			representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
			balance: 17774,
		},
		{
			id: 1030,
			name: 'Ammie Corrio',
			country: { name: 'Hungary', code: 'hu' },
			company: 'Moskowitz, Barry S',
			date: '2016-06-11T00:00:00.000Z',
			status: 'negotiation',
			verified: true,
			activity: 56,
			representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
			balance: 49201,
		},
		{
			id: 1031,
			name: 'Francine Vocelka',
			country: { name: 'Honduras', code: 'hn' },
			company: 'Cascade Realty Advisors Inc',
			date: '2017-08-02T00:00:00.000Z',
			status: 'qualified',
			verified: true,
			activity: 94,
			representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
			balance: 67126,
		},
		{
			id: 1032,
			name: 'Ernie Stenseth',
			country: { name: 'Australia', code: 'au' },
			company: 'Knwz Newsradio',
			date: '2018-06-06T00:00:00.000Z',
			status: 'renewal',
			verified: true,
			activity: 68,
			representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
			balance: 76017,
		},
		{
			id: 1033,
			name: 'Albina Glick',
			country: { name: 'Ukraine', code: 'ua' },
			company: 'Giampetro, Anthony D',
			date: '2019-08-08T00:00:00.000Z',
			status: 'proposal',
			verified: true,
			activity: 85,
			representative: { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
			balance: 91201,
		},
		{
			id: 1034,
			name: 'Alishia Sergi',
			country: { name: 'Qatar', code: 'qa' },
			company: 'Milford Enterprises Inc',
			date: '2018-05-19T00:00:00.000Z',
			status: 'negotiation',
			verified: false,
			activity: 46,
			representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
			balance: 12237,
		},
		{
			id: 1035,
			name: 'Solange Shinko',
			country: { name: 'Cameroon', code: 'cm' },
			company: 'Mosocco, Ronald A',
			date: '2015-02-12T00:00:00.000Z',
			status: 'qualified',
			verified: true,
			activity: 32,
			representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
			balance: 34072,
		},
		{
			id: 1036,
			name: 'Jose Stockham',
			country: { name: 'Italy', code: 'it' },
			company: 'Tri State Refueler Co',
			date: '2018-04-25T00:00:00.000Z',
			status: 'qualified',
			verified: true,
			activity: 77,
			representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
			balance: 94909,
		},
		{
			id: 1037,
			name: 'Rozella Ostrosky',
			country: { name: 'Venezuela', code: 've' },
			company: 'Parkway Company',
			date: '2016-02-27T00:00:00.000Z',
			status: 'unqualified',
			verified: true,
			activity: 66,
			representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
			balance: 57245,
		},
		{
			id: 1038,
			name: 'Valentine Gillian',
			country: { name: 'Paraguay', code: 'py' },
			company: 'Fbs Business Finance',
			date: '2019-09-17T00:00:00.000Z',
			status: 'qualified',
			verified: true,
			activity: 25,
			representative: { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
			balance: 75502,
		},
		{
			id: 1039,
			name: 'Kati Rulapaugh',
			country: { name: 'Puerto Rico', code: 'pr' },
			company: 'Eder Assocs Consltng Engrs Pc',
			date: '2016-12-03T00:00:00.000Z',
			status: 'renewal',
			verified: false,
			activity: 51,
			representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
			balance: 82075,
		},
		{
			id: 1040,
			name: 'Youlanda Schemmer',
			country: { name: 'Bolivia', code: 'bo' },
			company: 'Tri M Tool Inc',
			date: '2017-12-15T00:00:00.000Z',
			status: 'negotiation',
			verified: true,
			activity: 49,
			representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
			balance: 19208,
		},
		{
			id: 1041,
			name: 'Dyan Oldroyd',
			country: { name: 'Argentina', code: 'ar' },
			company: 'International Eyelets Inc',
			date: '2017-02-02T00:00:00.000Z',
			status: 'qualified',
			verified: false,
			activity: 5,
			representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
			balance: 50194,
		},
		{
			id: 1042,
			name: 'Roxane Campain',
			country: { name: 'France', code: 'fr' },
			company: 'Rapid Trading Intl',
			date: '2018-12-25T00:00:00.000Z',
			status: 'unqualified',
			verified: false,
			activity: 100,
			representative: { name: 'Anna Fali', image: 'annafali.png' },
			balance: 77714,
		},
		{
			id: 1043,
			name: 'Lavera Perin',
			country: { name: 'Vietnam', code: 'vn' },
			company: 'Abc Enterprises Inc',
			date: '2018-04-10T00:00:00.000Z',
			status: 'qualified',
			verified: false,
			activity: 71,
			representative: { name: 'Stephen Shaw', image: 'stephenshaw.png' },
			balance: 35740,
		},
		{
			id: 1044,
			name: 'Erick Ferencz',
			country: { name: 'Belgium', code: 'be' },
			company: 'Cindy Turner Associates',
			date: '2018-05-06T00:00:00.000Z',
			status: 'unqualified',
			verified: true,
			activity: 54,
			representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
			balance: 30790,
		},
		{
			id: 1045,
			name: 'Fatima Saylors',
			country: { name: 'Canada', code: 'ca' },
			company: 'Stanton, James D Esq',
			date: '2019-07-10T00:00:00.000Z',
			status: 'renewal',
			verified: true,
			activity: 93,
			representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
			balance: 52343,
		},
		{
			id: 1046,
			name: 'Jina Briddick',
			country: { name: 'Mexico', code: 'mx' },
			company: 'Grace Pastries Inc',
			date: '2018-02-19T00:00:00.000Z',
			status: 'unqualified',
			verified: false,
			activity: 97,
			representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
			balance: 53966,
		},
		{
			id: 1047,
			name: 'Kanisha Waycott',
			country: { name: 'Ecuador', code: 'ec' },
			company: 'Schroer, Gene E Esq',
			date: '2019-11-27T00:00:00.000Z',
			status: 'new',
			verified: false,
			activity: 80,
			representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
			balance: 9920,
		},
		{
			id: 1048,
			name: 'Emerson Bowley',
			country: { name: 'Finland', code: 'fi' },
			company: 'Knights Inn',
			date: '2018-11-24T00:00:00.000Z',
			status: 'new',
			verified: false,
			activity: 63,
			representative: { name: 'Stephen Shaw', image: 'stephenshaw.png' },
			balance: 78069,
		},
		{
			id: 1049,
			name: 'Blair Malet',
			country: { name: 'Finland', code: 'fi' },
			company: 'Bollinger Mach Shp & Shipyard',
			date: '2018-04-19T00:00:00.000Z',
			status: 'new',
			verified: true,
			activity: 92,
			representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
			balance: 65005,
		},
	]
	return data
}

const getSeverity = (status) => {
	switch (status) {
		case 'unqualified':
			return 'danger'

		case 'qualified':
			return 'success'

		case 'new':
			return 'info'

		case 'negotiation':
			return 'warn'

		case 'renewal':
			return null
	}
}

// import { useAuthStore } from '../store'
// import { useRouter } from 'vue-router'

// export default { <!-- <button @click="logout">Logout</button> -->
// 	setup() {
// 		const authStore = useAuthStore()
// 		const router = useRouter()

// 		const logout = () => {
// 			authStore.logout()
// 			router.push('/login')
// 		}

// 		return { user: authStore.user, logout }
// 	},
// }
//
</script>

<!-- <style>
// .dashboard {
// 	text-align: center;
// 	margin-top: 50px;
// }
//
</style> -->
