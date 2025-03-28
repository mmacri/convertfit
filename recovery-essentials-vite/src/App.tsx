import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/HomePage'
import AdminLayout from './components/admin/AdminLayout'
import AdminDashboard from './pages/admin/Dashboard'
import ProductsAdmin from './pages/admin/Products'
import OrdersAdmin from './pages/admin/Orders'
import CustomersAdmin from './pages/admin/Customers'
import EmailMarketingAdmin from './pages/admin/EmailMarketing'
import BlogAdmin from './pages/admin/Blog'
import MassageGunsPage from './pages/products/MassageGuns'
import ProductDetailPage from './pages/products/ProductDetail'
import ComparisonPage from './pages/products/Comparison'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/blog/BlogIndex'
import BlogPostPage from './pages/blog/BlogPost'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="products">
            <Route path="massage-guns" element={<MassageGunsPage />} />
            <Route path="massage-guns/:id" element={<ProductDetailPage />} />
            <Route path="comparison" element={<ComparisonPage />} />
          </Route>
          <Route path="blog">
            <Route index element={<BlogPage />} />
            <Route path=":slug" element={<BlogPostPage />} />
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="orders" element={<OrdersAdmin />} />
          <Route path="customers" element={<CustomersAdmin />} />
          <Route path="email-marketing" element={<EmailMarketingAdmin />} />
          <Route path="blog" element={<BlogAdmin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
