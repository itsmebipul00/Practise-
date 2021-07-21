
import mongoose from 'mongoose'

const fileSchema= mongoose.Schema(
    {
        Series_reference: { 
            type: String,
            required: true,
        },
        Period: { 
            type: String,
            required: false,
        },
        Suppressed: { 
            type: String,
            required: false,
        },
        STATUS: { 
            type: String,
            required: false,
        },
        UNITS: { 
            type: String,
            required: false,
        },
        Magnitude: { 
            type: String,
            required: false,
        },
        Subject: { 
            type: String,
            required: false,
        },
        Group: { 
            type: String,
            required: false,
        },
        Series_title_1: { 
            type: String,
            required: false,
        },
        Series_title_2: { 
            type: String,
            required: false,
        },
        Series_title_3: { 
            type: String,
            required: false,
        },
        Series_title_4: { 
            type: String,
            required: false,
        },
        Series_title_5: { 
            type: String,
            required: false,
        },
    }
)

const File = mongoose.model('File', fileSchema)

export default File





