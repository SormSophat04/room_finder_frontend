import React, { useState, useMemo } from 'react';

// --- Helper: Icon Components (as inline SVGs) ---
// Using inline SVGs to avoid external dependencies for icons.

const EyeIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const PencilIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

const Trash2Icon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);

const SearchIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const XIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


// --- Mock Data ---
const initialUsers = [
  {
    id: 1,
    name: 'Bessie Cooper',
    email: 'bessie.cooper@example.com',
    tel: '(219) 555-0114',
    role: 'UI/UX Designer',
    status: 'Active',
    avatar: 'https://placehold.co/100x100/7c3aed/ffffff?text=BC',
  },
  {
    id: 2,
    name: 'Dianne Russell',
    email: 'dianne.russell@example.com',
    tel: '(303) 555-0105',
    role: 'Frontend Developer',
    status: 'Active',
    avatar: 'https://placehold.co/100x100/d946ef/ffffff?text=DR',
  },
  {
    id: 3,
    name: 'Jacob Jones',
    email: 'jacob.jones@example.com',
    tel: '(208) 555-0112',
    role: 'Project Manager',
    status: 'Inactive',
    avatar: 'https://placehold.co/100x100/10b981/ffffff?text=JJ',
  },
  {
    id: 4,
    name: 'Kristin Watson',
    email: 'kristin.watson@example.com',
    tel: '(225) 555-0118',
    role: 'Backend Developer',
    status: 'Active',
    avatar: 'https://placehold.co/100x100/f59e0b/ffffff?text=KW',
  },
  {
    id: 5,
    name: 'Wade Warren',
    email: 'wade.warren@example.com',
    tel: '(405) 555-0128',
    role: 'QA Tester',
    status: 'Inactive',
    avatar: 'https://placehold.co/100x100/3b82f6/ffffff?text=WW',
  },
  {
    id: 6,
    name: 'Robert Fox',
    email: 'robert.fox@example.com',
    tel: '(480) 555-0103',
    role: 'DevOps Engineer',
    status: 'Active',
    avatar: 'https://placehold.co/100x100/ef4444/ffffff?text=RF',
  },
];


// --- Main App Component ---
function RoomManage() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [modal, setModal] = useState(null); // 'view', 'edit', 'delete'

  const filteredUsers = useMemo(() =>
    users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    ), [users, searchTerm]);

  const handleOpenModal = (type, user) => {
    setSelectedUser(user);
    setModal(type);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setModal(null);
  };

  const handleAddUser = () => {
     const newUser = {
        id: users.length + 1,
        name: 'New User',
        email: 'new.user@example.com',
        tel: '(000) 000-0000',
        role: 'New Role',
        status: 'Active',
        avatar: `https://placehold.co/100x100/cccccc/ffffff?text=NU`,
    };
    setUsers([...users, newUser]);
    handleOpenModal('edit', newUser);
  }

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    handleCloseModal();
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      setUsers(users.filter(user => user.id !== selectedUser.id));
      handleCloseModal();
    }
  };


  return (
    <div className="w-full text-gray-100 font-sans p-8">
      <main className="mx-auto">
        <h1 className="text-3xl font-bold mb-8">User Management</h1>
        
        {/* Header with Search and Add User */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <button 
            onClick={handleAddUser}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
            Add New User
            </button>
        </div>

        {/* Users Table */}
        <div className="bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="p-4 font-semibold">Images</th>
                    <th className="p-4 font-semibold">Role</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold">Contact</th>
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map(user => (
                    <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="p-4 flex items-center space-x-3">
                        <img src={user.avatar} alt={user.name} className="w-30 h-25 rounded-2xl object-cover" />
                        <div>
                          <p className="font-medium text-white">{user.name}</p>
                          <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                      </td>
                      {/* <td className="p-4 flex items-center space-x-3">
                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-white">{user.name}</p>
                          <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                      </td> */}
                      <td className="p-4 text-gray-300">{user.role}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-300">{user.tel}</td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center space-x-3">
                          <button onClick={() => handleOpenModal('view', user)} className="text-gray-400 hover:text-blue-400 transition-colors" title="View Details">
                            <EyeIcon className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleOpenModal('edit', user)} className="text-gray-400 hover:text-yellow-400 transition-colors" title="Edit User">
                            <PencilIcon className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleOpenModal('delete', user)} className="text-gray-400 hover:text-red-400 transition-colors" title="Delete User">
                            <Trash2Icon className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
               {filteredUsers.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                      <p className="text-lg">No users found.</p>
                      <p>Try adjusting your search.</p>
                  </div>
              )}
            </div>
        </div>

        {/* Modals */}
        {modal && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300">
                <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-md m-4" onClick={(e) => e.stopPropagation()}>
                    {modal === 'view' && <ViewUserModal user={selectedUser} onClose={handleCloseModal} />}
                    {modal === 'edit' && <EditUserModal user={selectedUser} onSave={handleUpdateUser} onClose={handleCloseModal} />}
                    {modal === 'delete' && <DeleteUserModal user={selectedUser} onDelete={handleDeleteUser} onClose={handleCloseModal} />}
                </div>
            </div>
        )}

      </main>
    </div>
  );
}

// --- Modal Components ---

function ViewUserModal({ user, onClose }) {
  if (!user) return null;
  return (
    <div className="p-6">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">User Details</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white"><XIcon/></button>
        </div>
        <div className="flex flex-col items-center">
            <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mb-4 ring-4 ring-purple-500" />
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-400">{user.role}</p>
        </div>
        <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span className="text-white font-medium">{user.email}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-400">Phone:</span>
                <span className="text-white font-medium">{user.tel}</span>
            </div>
             <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                 <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {user.status}
                </span>
            </div>
        </div>
         <div className="mt-8 text-right">
            <button 
                onClick={onClose}
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
                Close
            </button>
        </div>
    </div>
  );
}


function EditUserModal({ user, onSave, onClose }) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
       <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Edit User</h2>
            <button type="button" onClick={onClose} className="text-gray-400 hover:text-white"><XIcon/></button>
       </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
          <input type="tel" name="tel" value={formData.tel} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Role</label>
          <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
        </div>
      </div>
      <div className="mt-8 flex justify-end space-x-3">
        <button type="button" onClick={onClose} className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">Cancel</button>
        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">Save Changes</button>
      </div>
    </form>
  );
}

function DeleteUserModal({ user, onDelete, onClose }) {
  if (!user) return null;
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Confirm Deletion</h2>
      <p className="text-gray-300 mb-6">
        Are you sure you want to delete <span className="font-semibold text-purple-400">{user.name}</span>? This action cannot be undone.
      </p>
      <div className="flex justify-end space-x-3">
        <button onClick={onClose} className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">Cancel</button>
        <button onClick={onDelete} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">Delete User</button>
      </div>
    </div>
  );
}

export default RoomManage;

