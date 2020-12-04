import mongoose from 'mongoose'
// job trigger history table Schema
const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    mobile: { type: String, unique: true },
    password: { type: String},
    role: { type: String},
    createdBy: { type: String},
    updatedBy: { type: String},
    created: { type: Date, default: Date.now  },
    lastModified: { type: Date, default: Date.now  },
    isVerified: { type: Boolean , default: false },
    isActive: { type: Boolean , default: true },
    isDeleted: { type: Boolean , default: false }
}, { collection: 'users' });

export default mongoose.model('userModel', userSchema);

//role - "admin", "dataEntryOpe", "developer", "user"