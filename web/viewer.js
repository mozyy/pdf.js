/* Copyright 2016 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "web-com";
import "web-print_service";
import { RenderingStates, ScrollMode, SpreadMode } from "./ui_utils.js";
import { AppOptions } from "./app_options.js";
import { LinkTarget } from "./pdf_link_service.js";
import { PDFViewerApplication } from "./app.js";

/* eslint-disable-next-line no-unused-vars */
const pdfjsVersion =
  typeof PDFJSDev !== "undefined" ? PDFJSDev.eval("BUNDLE_VERSION") : void 0;
/* eslint-disable-next-line no-unused-vars */
const pdfjsBuild =
  typeof PDFJSDev !== "undefined" ? PDFJSDev.eval("BUNDLE_BUILD") : void 0;

const AppConstants =
  typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")
    ? { LinkTarget, RenderingStates, ScrollMode, SpreadMode }
    : null;

window.PDFViewerApplication = PDFViewerApplication;
window.PDFViewerApplicationConstants = AppConstants;
window.PDFViewerApplicationOptions = AppOptions;

function getViewerConfiguration() {
  return {
    appContainer: document.body,
    mainContainer: document.getElementById("viewerContainer"),
    viewerContainer: document.getElementById("viewer"),
    toolbar: {
      container: document.getElementById("toolbarViewer"),
      numPages: document.getElementById("numPages"),
      pageNumber: document.getElementById("pageNumber"),
      scaleSelect: document.getElementById("scaleSelect"),
      customScaleOption: document.getElementById("customScaleOption"),
      previous: document.getElementById("previous"),
      next: document.getElementById("next"),
      zoomIn: document.getElementById("zoomIn"),
      zoomOut: document.getElementById("zoomOut"),
      viewFind: document.getElementById("viewFind"),
      openFile:
        typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")
          ? document.getElementById("openFile")
          : null,
      print: document.getElementById("print"),
      editorFreeTextButton: document.getElementById("editorFreeText"),
      editorFreeTextParamsToolbar: document.getElementById(
        "editorFreeTextParamsToolbar"
      ),
      editorInkButton: document.getElementById("editorInk"),
      editorInkParamsToolbar: document.getElementById("editorInkParamsToolbar"),
      editorStampButton: document.getElementById("editorStamp"),
      editorStampParamsToolbar: document.getElementById(
        "editorStampParamsToolbar"
      ),
      download: document.getElementById("download"),
    },
    secondaryToolbar: {
      toolbar: document.getElementById("secondaryToolbar"),
      toggleButton: document.getElementById("secondaryToolbarToggle"),
      presentationModeButton: document.getElementById("presentationMode"),
      openFileButton:
        typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")
          ? document.getElementById("secondaryOpenFile")
          : null,
      printButton: document.getElementById("secondaryPrint"),
      downloadButton: document.getElementById("secondaryDownload"),
      viewBookmarkButton: document.getElementById("viewBookmark"),
      firstPageButton: document.getElementById("firstPage"),
      lastPageButton: document.getElementById("lastPage"),
      pageRotateCwButton: document.getElementById("pageRotateCw"),
      pageRotateCcwButton: document.getElementById("pageRotateCcw"),
      cursorSelectToolButton: document.getElementById("cursorSelectTool"),
      cursorHandToolButton: document.getElementById("cursorHandTool"),
      scrollPageButton: document.getElementById("scrollPage"),
      scrollVerticalButton: document.getElementById("scrollVertical"),
      scrollHorizontalButton: document.getElementById("scrollHorizontal"),
      scrollWrappedButton: document.getElementById("scrollWrapped"),
      spreadNoneButton: document.getElementById("spreadNone"),
      spreadOddButton: document.getElementById("spreadOdd"),
      spreadEvenButton: document.getElementById("spreadEven"),
      documentPropertiesButton: document.getElementById("documentProperties"),
    },
    sidebar: {
      // Divs (and sidebar button)
      outerContainer: document.getElementById("outerContainer"),
      sidebarContainer: document.getElementById("sidebarContainer"),
      toggleButton: document.getElementById("sidebarToggle"),
      resizer: document.getElementById("sidebarResizer"),
      // Buttons
      thumbnailButton: document.getElementById("viewThumbnail"),
      outlineButton: document.getElementById("viewOutline"),
      attachmentsButton: document.getElementById("viewAttachments"),
      layersButton: document.getElementById("viewLayers"),
      // Views
      thumbnailView: document.getElementById("thumbnailView"),
      outlineView: document.getElementById("outlineView"),
      attachmentsView: document.getElementById("attachmentsView"),
      layersView: document.getElementById("layersView"),
      // View-specific options
      outlineOptionsContainer: document.getElementById(
        "outlineOptionsContainer"
      ),
      currentOutlineItemButton: document.getElementById("currentOutlineItem"),
    },
    findBar: {
      bar: document.getElementById("findbar"),
      toggleButton: document.getElementById("viewFind"),
      findField: document.getElementById("findInput"),
      highlightAllCheckbox: document.getElementById("findHighlightAll"),
      caseSensitiveCheckbox: document.getElementById("findMatchCase"),
      matchDiacriticsCheckbox: document.getElementById("findMatchDiacritics"),
      entireWordCheckbox: document.getElementById("findEntireWord"),
      findMsg: document.getElementById("findMsg"),
      findResultsCount: document.getElementById("findResultsCount"),
      findPreviousButton: document.getElementById("findPrevious"),
      findNextButton: document.getElementById("findNext"),
    },
    passwordOverlay: {
      dialog: document.getElementById("passwordDialog"),
      label: document.getElementById("passwordText"),
      input: document.getElementById("password"),
      submitButton: document.getElementById("passwordSubmit"),
      cancelButton: document.getElementById("passwordCancel"),
    },
    documentProperties: {
      dialog: document.getElementById("documentPropertiesDialog"),
      closeButton: document.getElementById("documentPropertiesClose"),
      fields: {
        fileName: document.getElementById("fileNameField"),
        fileSize: document.getElementById("fileSizeField"),
        title: document.getElementById("titleField"),
        author: document.getElementById("authorField"),
        subject: document.getElementById("subjectField"),
        keywords: document.getElementById("keywordsField"),
        creationDate: document.getElementById("creationDateField"),
        modificationDate: document.getElementById("modificationDateField"),
        creator: document.getElementById("creatorField"),
        producer: document.getElementById("producerField"),
        version: document.getElementById("versionField"),
        pageCount: document.getElementById("pageCountField"),
        pageSize: document.getElementById("pageSizeField"),
        linearized: document.getElementById("linearizedField"),
      },
    },
    altTextDialog: {
      dialog: document.getElementById("altTextDialog"),
      optionDescription: document.getElementById("descriptionButton"),
      optionDecorative: document.getElementById("decorativeButton"),
      textarea: document.getElementById("descriptionTextarea"),
      cancelButton: document.getElementById("altTextCancel"),
      saveButton: document.getElementById("altTextSave"),
    },
    annotationEditorParams: {
      editorFreeTextFontSize: document.getElementById("editorFreeTextFontSize"),
      editorFreeTextColor: document.getElementById("editorFreeTextColor"),
      editorInkColor: document.getElementById("editorInkColor"),
      editorInkThickness: document.getElementById("editorInkThickness"),
      editorInkOpacity: document.getElementById("editorInkOpacity"),
      editorStampAddImage: document.getElementById("editorStampAddImage"),
    },
    printContainer: document.getElementById("printContainer"),
    openFileInput:
      typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")
        ? document.getElementById("fileInput")
        : null,
    debuggerScriptPath: "./debugger.js",
  };
}

function webViewerLoad() {
  localStorage.removeItem("pdfjs.history");
  const config = getViewerConfiguration();

  // ------- 可配置滚动条宽度 start-------
  const searchParams = new URLSearchParams(location.search);
  const scrollbarWidth = searchParams.get("scrollbar_width");
  if (scrollbarWidth) {
    const style = document.createElement("style");
    // eslint-disable-next-line no-unsanitized/property
    style.innerHTML = `
    /*定义滚动条高宽及背景
    高宽分别对应横竖滚动条的尺寸 scrollbar_width*/
    ::-webkit-scrollbar {
      width: ${scrollbarWidth}px;
      background-color:#F5F5F5;
    }
    ::-webkit-scrollbar:active {
      background-color:#ccc;
    }
    /*定义滑块
     内阴影+圆角*/
    ::-webkit-scrollbar-thumb
    {
      min-height: 40px;
      border-radius:6px;
      background-color:#aaa;
    }
    ::-webkit-scrollbar-thumb:active {
      background-color:#555;
    }
    `;
    document.head.appendChild(style);
  }
  // ------- 可配置滚动条宽度 end  -------

  function setupWebViewJavascriptBridge(callback) {
    // 小程序里面返回空的函数 防止ios下面"未设置业务域名"的错误
    if (navigator.userAgent.includes("miniProgram")) {
      return callback({ callHandler() {} });
    }
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    const WVJBIframe = document.createElement("iframe");
    WVJBIframe.style.display = "none";
    WVJBIframe.src = "https://__bridge_loaded__";
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
      WVJBIframe.remove();
    }, 0);
  }

  let bridge = {
    callHandler(handlerName, data) {
      if (window.js_interface && window.js_interface[handlerName]) {
        window.js_interface[handlerName](data);
      }
    },
  };
  if (/(iPhone|iPad|iPod|iOS|Mac OS)/i.test(navigator.userAgent)) {
    setupWebViewJavascriptBridge(function (iosBridge) {
      /* Initialize your app here */
      bridge = iosBridge;
      // bridge.registerHandler("JS Echo", function (data, responseCallback) {
      //   console.log("JS Echo called with:", data);
      //   responseCallback(data);
      // });
      // bridge.callHandler("ObjC Echo", { key: "value" },
      // function responseCallback(
      //   responseData
      // ) {
      //   console.log("JS received response:", responseData);
      // });
    });
  }

  // 节流函数
  // const timeout = null;
  // const startTime = Date.now();
  // const maxTimelong = 1000;

  const vc = document.querySelector("#viewerContainer");
  // pdf 查看完毕的回调
  const scrollHandler = () => {
    if (vc.scrollHeight - vc.scrollTop < vc.clientHeight + 10) {
      console.log("call setBtnEnable");
      if (/(iPhone|iPad|iPod|iOS|Mac OS)/i.test(navigator.userAgent)) {
        bridge.callHandler("setBtnEnable");
      } else {
        if (window.js_interface && window.js_interface.setBtnEnable) {
          window.js_interface.setBtnEnable();
        }
      }
      parent.postMessage("setBtnEnable", "*");
      // vc.removeEventListener("scroll", scrollHandlerWarp);
    }
  };

  if (typeof PDFJSDev !== "undefined" && PDFJSDev.test("GENERIC")) {
    // Give custom implementations of the default viewer a simpler way to
    // set various `AppOptions`, by dispatching an event once all viewer
    // files are loaded but *before* the viewer initialization has run.
    const event = new CustomEvent("webviewerloaded", {
      bubbles: true,
      cancelable: true,
      detail: {
        source: window,
      },
    });
    try {
      // Attempt to dispatch the event at the embedding `document`,
      // in order to support cases where the viewer is embedded in
      // a *dynamically* created <iframe> element.
      parent.document.dispatchEvent(event);
    } catch (ex) {
      // The viewer could be in e.g. a cross-origin <iframe> element,
      // fallback to dispatching the event at the current `document`.
      console.error(`webviewerloaded: ${ex}`);
      document.dispatchEvent(event);
    }
  }
  PDFViewerApplication.run(config);
  PDFViewerApplication.initializedPromise.then(() => {
    PDFViewerApplication.eventBus.on("pagesinit", () => {
      // 隐藏loading
      document.querySelector(".pdf-circular-loading").style.display =
        "none";
    });
    PDFViewerApplication.eventBus.on("updateviewarea", () => {
      scrollHandler();
    });
    Object.keys(PDFViewerApplication.eventBus._listeners).forEach(key => {
      PDFViewerApplication.eventBus.on(key, () => {
        console.log(11, key);
        // const vc = document.querySelector("#viewerContainer");
        // const viewer = document.querySelector("#viewer");
        // console.log(vc.clientHeight, viewer.clientHeight);
      });
    });
  });
}

// Block the "load" event until all pages are loaded, to ensure that printing
// works in Firefox; see https://bugzilla.mozilla.org/show_bug.cgi?id=1618553
document.blockUnblockOnload?.(true);

if (
  document.readyState === "interactive" ||
  document.readyState === "complete"
) {
  webViewerLoad();
} else {
  document.addEventListener("DOMContentLoaded", webViewerLoad, true);
}

export {
  PDFViewerApplication,
  AppConstants as PDFViewerApplicationConstants,
  AppOptions as PDFViewerApplicationOptions,
};
