import Header from '@editorjs/header'
import List from '@editorjs/list'
import Link from '@editorjs/link'
import Image from '@editorjs/image'
import Checklist from '@editorjs/checklist'
import Embed from '@editorjs/embed'
import Quote from '@editorjs/quote'
import Raw from '@editorjs/raw'
import SimpleImage from '@editorjs/simple-image'
import Code from '@editorjs/code'
import InlineCode from '@editorjs/inline-code'
import Marker from '@editorjs/marker'
import Delimiter from '@editorjs/delimiter'
import Table from '@editorjs/table'
import Color from 'editorjs-text-color-plugin'
import Alert from 'editorjs-alert'

const Tools = {
    color: {
        class: Color, 
        config: {
            colorCollections: ['#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'],
            defaultColor: '#FF1300',
            type: 'text', 
            customPicker: true
        }
    },
    header: {
        class: Header,
        config: {
            placeholder: 'Type Heading...',
            levels: [2, 3],
            defaultLevel: 2,
          },
        inlineToolbar: true
        
    },
    list: {
        class: List,
        inlineToolbar: true
    },
    link: {
        class: Link,
        inlineToolbar: true
    },
    image: {
        class: Image,
        inlineToolbar: true
    },
    checklist: {
        class: Checklist,
        inlineToolbar: true
    },
    embed: {
        class: Embed,
        inlineToolbar: true
    },
    quote: {
        class: Quote,
        inlineToolbar: true
    },
    raw: {
        class: Raw,
        inlineToolbar: true
    },
    simpleImage: {
        class: SimpleImage,
        inlineToolbar: true
    },
    code: {
        class: Code,
        inlineToolbar: true
    },
    inlineCode: {
        class: InlineCode,
        inlineToolbar: true
    },
    marker: {
        class: Marker,
        inlineToolbar: true
    },
    delimiter: {
        class: Delimiter,
        inlineToolbar: true
    },
    alert: {
        class: Alert,
        inlineToolbar: true,
        config: {
            defaultType: 'primary',
        }
    },
    table: {
        class: Table,
        inlineToolbar: true,
        config: {
            rows: 2,
            cols: 3,
            maxRows: 15,
            maxCols: 7,
          },
    },
}

export default Tools
