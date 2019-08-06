import React, { useRef, useEffect, useState } from 'react';
// import ScrollBar from 'react-overlayscrollbars';
import ScrollBar from './../../../common/ScrollBar';
import { Button } from 'antd';
import $ from 'jquery';

import CodeMirror from '@/common/CodeMirror/ReactCodeMirror.jsx';

import './basic.scss';

export default function Basic() {
    const [instance, setInstance] = useState(null);
    const [className, setClassName] = useState('codemirror-host');
    const [value, setValue] = useState('{\n\tclassName     : "os-theme-dark",\n\tresize       : "none",\n\tsizeAutoCapable : true,\n\tpaddingAbsolute : true,\n\tscrollbars : {\n\t\tclickScrolling : true\n\t}\n}');
    const [scrollOption, setScrollOption] = useState({
        className:'os-theme-dark',
        overflowBehavior:{ x: 'hidden' },
        paddingAbsolute:true,
        resize:'none',
        scrollbars:{ autoHide: 'l' },
        sizeAutoCapable:true,
        style:{ background: 'white' },
    });
    const ScrollBarBasic = useRef(null);
    const CodeMirrorBox = useRef(null);

    // const copy = () => {
    //     var copyDOM = document.getElementById('xxx'); //需要复制文字的节点
    //     var range = document.createRange(); //创建一个range
    //     window.getSelection().removeAllRanges(); //清楚页面中已有的selection
    //     range.selectNode(copyDOM); // 选中需要复制的节点
    //     window.getSelection().addRange(range); // 执行选中元素
    //     var successful = document.execCommand('copy'); // 执行 copy 操作
    //     if(successful){
    //         alert('复制成功！');
    //     }else{
    //         alert('复制失败，请手动复制！');
    //     }
    //     // 移除选中的元素
    //     window.getSelection().removeAllRanges();
    // };

    const onChange = () => {
        let changeTimeoutId;
        if(changeTimeoutId !== undefined) {
            clearTimeout(changeTimeoutId);
        }
        setValue(instance.getValue());
        // eslint-disable-next-line
        eval(`setScrollOption($.extend(true, {}, ScrollBarBasic.current.defaultOptions(),${instance.getValue()}))`);
        console.log('-',scrollOption,setScrollOption,$);
        changeTimeoutId = setTimeout(function() {
            setClassName('codemirror-host');
            try {
                var json = JSON.parse(instance.getValue());
                console.log(json);
            } catch (error) {
                setClassName('codemirror-host codemirror-error');
                console.log(error);
            }
        }, 500);
    };

    useEffect(() => {
        console.log(CodeMirrorBox.current.getCodeMirror(),'useEffect');
        setInstance(CodeMirrorBox.current.getCodeMirror());

    }, []);
    if(ScrollBarBasic.current){
        console.log(ScrollBarBasic,'ScrollBarBasic');
        ScrollBarBasic.current.extension('myBasicExtension', function(defaultOptions, framework) {
            var osInstance = this;
            var extension = {};

            var handleElmHorizontal;
            var handleElmVertical;

            extension.added = function() {
                var instanceElements = osInstance.getElements();
                var scrollbarHorizontalHandle =
                    instanceElements.scrollbarHorizontal.handle;
                var scrollbarVerticalHandle = instanceElements.scrollbarVertical.handle;
                var html =
                    '<div style="height: 100%; width: 100%; background: red;"></div>';

                handleElmHorizontal = framework(html);
                handleElmVertical = framework(html);

                framework(scrollbarHorizontalHandle).append(handleElmHorizontal);
                framework(scrollbarVerticalHandle).append(handleElmVertical);
            };

            extension.removed = function() {
                handleElmHorizontal.remove();
                handleElmVertical.remove();
            };

            return extension;
        });
    }


    return (
        <div>
            <CodeMirror
                className={className}
                onChange={onChange}
                options={{
                    mode: { name: 'javascript', json: true },
                    lineSeparator: null,
                    theme: 'default',
                    indentUnit: 2,
                    smartIndent: true,
                    tabSize: 4,
                    indentWithTabs: false,
                    electricChars: true,
                }}
                preserveScrollPosition={{
                    top: 20,
                    left:10,
                }}
                ref={CodeMirrorBox}
                value={value}
            />
            {Array(1)
                .fill(0)
                .map((v, i) => (
                    <div key={i}>v</div>
                ))}
            <ScrollBar id="roy_basic"
                       ref={ScrollBarBasic}
                       {...scrollOption}>
                <div style={{ whiteSpace: 'nowrap', wordBreak: 'break-all' }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                    <br />
                    >tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                    <br />
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren,
                    <br />
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                    <br />
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam voluptua.
                    <br />
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren,
                    <br />
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                    <br />
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam voluptua.
                    <br />
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren,
                    <br />
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                    <br />
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam voluptua.
                    <br />
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren,
                    <br />
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                    <br />
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam voluptua.
                    <br />
                </div>
            </ScrollBar>
            <Button
                icon="caret-right"
                onClick={() =>
                    ScrollBarBasic.current.addExt('myBasicExtension')
                }
                type="primary"
            >
                Primary
            </Button>
            <Button
                icon="caret-left"
                onClick={() =>
                    ScrollBarBasic.current.removeExt('myBasicExtension')
                }
            >
                Default
            </Button>
        </div>
    );
}


