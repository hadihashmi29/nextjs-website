# GenAlpha Admin Dashboard Setup Guide

## Admin Portal Access

The admin dashboard allows you to manage orders in real-time, track order status, and monitor business metrics.

### Login Credentials

**Admin Portal URL:** `/admin/login`

**Default Credentials:**
- Email: `admin@genalphawear.com`
- Password: `GenAlpha2025!`

### Features

#### 1. Real-Time Order Management
- Orders automatically appear in the dashboard when customers place them
- Dashboard refreshes every 5 seconds to show latest orders
- No manual refresh needed

#### 2. Order Status Tracking
You can update order status to:
- **Pending** - New orders waiting to be processed
- **Processing** - Order is being prepared
- **Shipped** - Order is in transit
- **Delivered** - Order successfully delivered
- **Cancelled** - Order cancelled

#### 3. Business Analytics
Dashboard shows:
- Total orders count
- Pending orders (awaiting processing)
- In-transit orders (currently shipping)
- Total revenue generated

#### 4. Order Details
Each order displays:
- Customer name, email, phone
- Shipping address and city
- Ordered items with sizes and quantities
- Individual item prices
- Total order amount
- Order timestamp
- Current status

### Security Features

1. **Session-Based Authentication**
   - Secure HTTP-only cookies
   - 7-day session duration
   - Automatic logout on session expiry

2. **Protected Routes**
   - `/admin/dashboard` requires authentication
   - Unauthorized access redirects to login
   - API endpoints verify admin session

3. **Middleware Protection**
   - All admin routes protected at middleware level
   - Prevents direct URL access without login

### How Orders Flow

1. **Customer Places Order**
   - Customer completes checkout form
   - Order sent to WhatsApp for communication
   - Order automatically saved to admin dashboard

2. **Admin Receives Notification**
   - Order appears instantly in dashboard
   - Shows as "Pending" status
   - All customer details visible

3. **Admin Processes Order**
   - Update status to "Processing"
   - Prepare and package items
   - Update status to "Shipped" when dispatched
   - Mark "Delivered" when customer receives

4. **Real-Time Updates**
   - Dashboard refreshes every 5 seconds
   - New orders appear automatically
   - Status changes reflect immediately

### Admin Dashboard Navigation

1. **Login Page** (`/admin/login`)
   - Enter credentials
   - Secure authentication
   - Redirects to dashboard on success

2. **Dashboard** (`/admin/dashboard`)
   - View all orders
   - Update order status
   - Monitor business metrics
   - Logout option in header

### API Endpoints

The admin system uses these API routes:

- `GET /api/admin/orders` - Fetch all orders
- `GET /api/admin/stats` - Get business statistics
- `POST /api/admin/orders/update-status` - Update order status
- `POST /api/admin/logout` - Admin logout
- `POST /api/orders/submit` - Submit new order (customer-facing)

### Important Notes

1. **In-Memory Storage**
   - Current version uses in-memory storage
   - Orders reset on server restart
   - For production, integrate with a database (Supabase, Neon, etc.)

2. **Change Admin Password**
   - Edit `lib/admin-auth.ts` to change credentials
   - Use environment variables for production

3. **Session Security**
   - Sessions stored in HTTP-only cookies
   - Cannot be accessed by JavaScript
   - Secure in production (HTTPS required)

### Customization

#### Change Admin Credentials
Edit `lib/admin-auth.ts`:

\`\`\`ts
const ADMIN_CREDENTIALS = {
  email: "youremail@example.com",
  password: "YourStrongPassword123!",
}
\`\`\`

#### Adjust Auto-Refresh Interval
Edit `app/admin/dashboard/page.tsx`:

\`\`\`ts
// Change 5000 (5 seconds) to your preferred interval
const interval = setInterval(fetchData, 5000)
\`\`\`

#### Add More Admins
Currently supports single admin. To add multiple admins:
1. Extend `ADMIN_CREDENTIALS` to array
2. Modify `loginAdmin` function to check array
3. Store admin email in session cookie

### Troubleshooting

**Issue: Can't login**
- Check credentials in `lib/admin-auth.ts`
- Clear browser cookies
- Check browser console for errors

**Issue: Orders not appearing**
- Verify checkout integration
- Check browser console for API errors
- Ensure `/api/orders/submit` is working

**Issue: Session expires too quickly**
- Adjust `maxAge` in `lib/admin-auth.ts`
- Default is 7 days (604800 seconds)

**Issue: Dashboard not refreshing**
- Check browser console for errors
- Verify internet connection
- Check if API endpoints are accessible

### Production Deployment

Before deploying to production:

1. **Add Database Integration**
   - Replace in-memory store with database
   - Use Supabase, Neon, or PostgreSQL
   - Implement proper data persistence

2. **Use Environment Variables**
   - Store admin credentials in `.env`
   - Never commit passwords to git
   - Use strong, unique passwords

3. **Enable HTTPS**
   - Required for secure cookies
   - Vercel automatically provides HTTPS

4. **Add Email Notifications**
   - Send emails when orders placed
   - Notify when status changes
   - Use services like Resend or SendGrid

5. **Implement Role-Based Access**
   - Add admin roles (super admin, staff)
   - Different permissions per role
   - Audit logs for admin actions

### Support

For issues or questions:
- Check this documentation first
- Review code comments in admin files
- Contact technical support

---

**Last Updated:** 2025
**Version:** 1.0.0
