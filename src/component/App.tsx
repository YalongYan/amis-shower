import React, { useEffect, useState, FC } from 'react';

import { Editor } from 'amis-editor';
import 'amis/lib/themes/default.css';
import 'amis-editor/dist/style.css';
import 'font-awesome/css/font-awesome.css';

import axios from 'axios';

interface propsTyps {
    value?: Object;
    url?: string;
    id?: number | string;
}
const AmisShower: FC<propsTyps> = (props: propsTyps) => {

    const { value, url, id } = props;
    const [showValue, setShowValue] = useState<any>({});

    useEffect(() => {
        initFn()
    }, [])

    const initFn = async () => {
        if (value) {
            setShowValue(value)
        } else if (id && url) {
            const res = await axios({
                method: 'POST',
                url: url,
                data: {
                    id
                }
            })
            if (res.status === 200) {
                const d = res.data.chartData || '{}'
                setShowValue(JSON.parse(d))
            }
        } else {
            setShowValue({
                "type": "page",
                "body": "请填写静态value值，或者填写id 和url展示动态数据 "
              })
        }
    }

    const handleEditorChange = () => {}

    return (
        <div>
        {
            Object.keys(showValue).length && 
            <Editor
                className="editContainer"
                value={showValue}
                preview={true}
                onChange={handleEditorChange}
            />
        }
        </div>
    );
};

export default AmisShower;
