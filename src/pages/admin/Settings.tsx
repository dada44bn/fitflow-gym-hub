import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Building, Mail, Phone, MapPin, Globe, Lock, Bell, Users, Cloud, Shield, Clock, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { CreditCard } from 'lucide-react';

const AdminSettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Settings</h1>
        <p className="text-muted-foreground">Configure system-wide settings for your gym</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Gym Information</CardTitle>
              <CardDescription>Manage your gym's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="gym-name">Gym Name</Label>
                  <div className="relative">
                    <Building className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="gym-name" placeholder="FitFlow Gym" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="contact-email" placeholder="contact@fitflow.com" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="contact-phone" placeholder="+1 (555) 123-4567" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <div className="relative">
                    <Globe className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="website" placeholder="https://fitflow.com" className="pl-8" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="address" placeholder="123 Fitness Street, City" className="pl-8" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">About</Label>
                <textarea
                  id="description"
                  className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="A short description about your gym..."
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Operating Hours</CardTitle>
              <CardDescription>Set your gym's operational schedule</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Monday - Friday</Label>
                  <div className="flex space-x-2">
                    <Input type="time" defaultValue="06:00" />
                    <span className="flex items-center">to</span>
                    <Input type="time" defaultValue="22:00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Saturday</Label>
                  <div className="flex space-x-2">
                    <Input type="time" defaultValue="08:00" />
                    <span className="flex items-center">to</span>
                    <Input type="time" defaultValue="20:00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Sunday</Label>
                  <div className="flex space-x-2">
                    <Input type="time" defaultValue="10:00" />
                    <span className="flex items-center">to</span>
                    <Input type="time" defaultValue="18:00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Holidays</Label>
                  <div className="flex space-x-2">
                    <Input type="time" defaultValue="10:00" />
                    <span className="flex items-center">to</span>
                    <Input type="time" defaultValue="16:00" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="24-hour" />
                  <Label htmlFor="24-hour">24/7 Access for Premium Members</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="holiday-closed" />
                  <Label htmlFor="holiday-closed">Closed on Major Holidays</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Protect your system and user data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock size={20} className="text-amber-500" />
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Require admins to use 2FA</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock size={20} className="text-amber-500" />
                    <div>
                      <p className="font-medium">Password Policy</p>
                      <p className="text-sm text-muted-foreground">Enforce strong passwords</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield size={20} className="text-amber-500" />
                    <div>
                      <p className="font-medium">Failed Login Lockout</p>
                      <p className="text-sm text-muted-foreground">Lock accounts after 5 failed attempts</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-amber-500" />
                    <div>
                      <p className="font-medium">Session Timeout</p>
                      <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="space-y-2 pt-4 border-t">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" min="5" defaultValue="30" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Protection</CardTitle>
              <CardDescription>Configure data privacy and protection settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cloud size={20} className="text-blue-500" />
                  <div>
                    <p className="font-medium">Automated Backups</p>
                    <p className="text-sm text-muted-foreground">Daily system backups</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield size={20} className="text-blue-500" />
                  <div>
                    <p className="font-medium">Data Encryption</p>
                    <p className="text-sm text-muted-foreground">Encrypt sensitive member data</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-blue-500" />
                  <div>
                    <p className="font-medium">Activity Logging</p>
                    <p className="text-sm text-muted-foreground">Log all admin actions</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure system email notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Member Registration</p>
                  <p className="text-sm text-muted-foreground">Send welcome email to new members</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Payment Receipts</p>
                  <p className="text-sm text-muted-foreground">Send receipt after successful payment</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Subscription Reminders</p>
                  <p className="text-sm text-muted-foreground">Send reminder before subscription renewal</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Class Bookings</p>
                  <p className="text-sm text-muted-foreground">Send confirmation for class bookings</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">Send promotional emails and offers</p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Configure alerts for system administrators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Security Alerts</p>
                  <p className="text-sm text-muted-foreground">Failed login attempts, unusual activity</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Payment Failures</p>
                  <p className="text-sm text-muted-foreground">Alert on failed payment transactions</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">System Errors</p>
                  <p className="text-sm text-muted-foreground">Critical system errors and issues</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2 pt-4 border-t">
                <Label htmlFor="alert-email">Alert Email Recipients</Label>
                <Input id="alert-email" placeholder="admin@fitflow.com, tech@fitflow.com" />
                <p className="text-xs text-muted-foreground">Separate multiple emails with commas</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Configure user-related settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Self-Registration</p>
                  <p className="text-sm text-muted-foreground">Allow users to register accounts</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Verification</p>
                  <p className="text-sm text-muted-foreground">Require email verification for new accounts</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Account Deactivation</p>
                  <p className="text-sm text-muted-foreground">Allow members to deactivate their accounts</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Profile Visibility</p>
                  <p className="text-sm text-muted-foreground">Let users control profile privacy</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Admin Roles</CardTitle>
              <CardDescription>Configure administrator access levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium">Role</div>
                  <div className="font-medium">Description</div>
                  <div className="font-medium text-right">Members</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 py-3 border-t items-center">
                  <div className="font-medium">Super Admin</div>
                  <div className="text-sm text-muted-foreground">Full system access</div>
                  <div className="text-right">
                    <Badge>2</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 py-3 border-t items-center">
                  <div className="font-medium">Manager</div>
                  <div className="text-sm text-muted-foreground">Member & trainer management</div>
                  <div className="text-right">
                    <Badge variant="outline">4</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 py-3 border-t items-center">
                  <div className="font-medium">Staff</div>
                  <div className="text-sm text-muted-foreground">Basic operations access</div>
                  <div className="text-right">
                    <Badge variant="outline">8</Badge>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="mt-4">
                <Users className="mr-2 h-4 w-4" />
                Manage Admin Users
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure payment processing options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard size={20} className="text-purple-500" />
                  <div>
                    <p className="font-medium">Credit Card Payments</p>
                    <p className="text-sm text-muted-foreground">Accept credit/debit cards</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell size={20} className="text-purple-500" />
                  <div>
                    <p className="font-medium">Payment Reminders</p>
                    <p className="text-sm text-muted-foreground">Send payment due reminders</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield size={20} className="text-purple-500" />
                  <div>
                    <p className="font-medium">Auto-Renewals</p>
                    <p className="text-sm text-muted-foreground">Automatically renew subscriptions</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-purple-500" />
                  <div>
                    <p className="font-medium">Digital Receipts</p>
                    <p className="text-sm text-muted-foreground">Email receipts for all transactions</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Invoice Settings</CardTitle>
              <CardDescription>Configure invoice and receipt options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="business-name">Business Name on Invoices</Label>
                <Input id="business-name" defaultValue="FitFlow Gym LLC" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="invoice-prefix">Invoice Number Prefix</Label>
                <Input id="invoice-prefix" defaultValue="FF-" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="invoice-notes">Default Invoice Notes</Label>
                <textarea
                  id="invoice-notes"
                  className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="Thank you for choosing FitFlow Gym. For any billing inquiries, please contact billing@fitflow.com."
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Include Logo on Invoices</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettingsPage;
