import React from 'react'
import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteRequest } from '../../redux/slices/requestSlice';
import styles from './DeliveryCard.module.scss';


const DeliveryCard = ({id, from, to, type, description, date, departureDate}) => {
//    const formatedDepartureDate = departureDate.toISOString().split('T')[0]; // 2020-00-00
//  const clearFormat = formatedDepartureDate.split(".").reverse().join("."); // 00-00-2020
const dispatch = useDispatch();
//  const formatedDepartureDate = departureDate.toLocaleDateString('en-GB').replace(/\//g, '.') // 00.00.2020
const currentDate = date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});

 const formatedDepartureDate = departureDate.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric'});

const deleteClickHandler = (id) => {
  dispatch(deleteRequest({id: id}))
}

  return (
    <>
      <Box
      className={styles.card}
      sx={{
        // width: 300,
        // height: 300,
        //  backgroundColor: 'primary.dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <div className={styles.route}>
        <p>The city from which the parcel is sent: <br /> <span>{from}</span></p>
        <p>The city to which the parcel is sent: <br /> <span>{to}</span></p>
      </div>
      <div className={styles.info}>
      <p className={styles.name}>Date of dispatch: <span className={styles.text}>{formatedDepartureDate}</span></p>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>Type of parcel: <span className={styles.text}>{type}</span></p>
      </div>
      <div className={styles.info}>
        {description.length > 0 ?
          <p className={styles.name}>Description: <span className={styles.text}>{description}</span></p>
          : null
        }
      </div>
      <div className="created">
          <p className={styles.name}>Created at: <span className={styles.text}>{currentDate}</span></p>
      </div>

      <div className={styles.helperButtons}>
        <Link to={`edit-request/${id}`}>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </Link>
        {/* <Link> */}
          <Fab className={styles.deleteBtn} color="primary" aria-label="add" onClick={() => deleteClickHandler(id)}>
            <DeleteOutlineIcon />
          </Fab>
        {/* </Link> */}
      </div>

      </Box>
    </>
  )
}

export default DeliveryCard