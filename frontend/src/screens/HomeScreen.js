import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProduct } from '../actions/productActions'
const HomeScreen = () => {
  const dispatch = useDispatch()
  const { loading, error, products } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(listProduct())
  }, [dispatch])

  return (
    <Fragment>
      <h1>Lastest Products</h1>
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : error ? (
        <h3>
          <Message variant='danger'>{error}</Message>
        </h3>
      ) : (
        <Row>
          {products?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  )
}

export default HomeScreen
