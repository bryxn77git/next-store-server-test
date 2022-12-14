import { ConfirmationNumberOutlined } from '@mui/icons-material'
import { Chip, Grid } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import useSWR from 'swr';

import { AdminLayout } from '../../components/layouts'
import { dbOrders } from '../../database';
import { IOrder, IUser } from '../../interfaces';


const columns:GridColDef[] = [
    { field: 'id', headerName: 'Cotización ID', width: 250 },
    { field: 'email', headerName: 'Correo', width: 250 },
    { field: 'name', headerName: 'Nombre Completo', width: 250 },
    {
        field: 'status',
        headerName: 'Estatus',
        width: 150,
        renderCell: ({ row }: GridValueGetterParams) => {
            switch ( row.status ) {
                case 'pendiente':
                    
                    return ( <Chip variant='outlined' label="Pendiente" color="error" /> )
                case 'en proceso':
                    
                    return ( <Chip variant='outlined' label="En proceso" color="warning" /> )
                case 'finalizado':
                    
                    return ( <Chip variant='outlined' label="Finalizado" color="success" /> )
            
                default:
                    return (<></>);
            }
        }
    },
    { field: 'noProducts', headerName: 'No.Productos', align: 'center', width: 150 },
    {
        field: 'check',
        headerName: 'Ver cotización',
        renderCell: ({ row }: GridValueGetterParams) => {
            return (
                <a href={ `/admin/orders/${ row.id }` } target="_blank" rel="noreferrer" >
                    Ver cotización
                </a>
            )
        }
    },
    { field: 'createdAt', headerName: 'Fecha de creación', width: 300 },

];

interface Props {
    orders: IOrder[];
}


const OrdersPage:FC<Props> = ({orders}) => {

    // const { data, error } = useSWR<IOrder[]>('/api/admin/orders');
    
    // if ( !orders ) return (<></>);

    const rows = orders.map( order => {

        const date = new Date( order.createdAt! );

        let formatDate = `${date.getDate() < 10 ? '0'+date.getDate() : date.getDate() }-${date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth()}-${date.getFullYear()} ${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}`


        return {
            id    : order._id,
            email : (order.user as IUser).email,
            name  : (order.user as IUser).name,
            status: order.status,
            noProducts: order.numberOfItems,
            createdAt: formatDate,

        }
    });


  return (
    <AdminLayout 
        title={'Cotizaciónes'} 
        subTitle={'Mantenimiento de cotizaciónes'}
        icon={ <ConfirmationNumberOutlined /> }
    >
         <Grid container className='fadeIn'>
            <Grid item xs={12} sx={{ minHeight:'calc(100vh - 250px)', width: '100%' }}>
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                />

            </Grid>
        </Grid>
        
    </AdminLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const orders = await dbOrders.getOrders();

    console.log(orders)

    return {
        props: {
            orders
        }
    }
}

export default OrdersPage