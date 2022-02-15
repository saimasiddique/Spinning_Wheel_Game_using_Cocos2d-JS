/*
* AUTOGENERATED FILE. DO NOT EDIT IT
* Generated by "generate_js_bindings.py -c system_jsb.ini" on 2012-12-17
* Script version: v0.5
*/
#include "js_bindings_system_functions.h"
#include "js_bindings_config.h"
#include "js_bindings_core.h"
#include "js_manual_conversions.h"
#include "ScriptingCore.h"
#include "local-storage/LocalStorage.h"

USING_NS_CC;

// Arguments: char*
// Ret value: const char*
bool JSB_localStorageGetItem(JSContext *cx, uint32_t argc, jsval *vp) {
    JSB_PRECONDITION2( argc == 1, cx, false, "Invalid number of arguments" );
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    std::string arg0; 

    ok &= jsval_to_std_string( cx, args.get(0), &arg0 );
    JSB_PRECONDITION2(ok, cx, false, "Error processing arguments");
    std::string ret_val;

    ok = localStorageGetItem(arg0, &ret_val);
    if (ok) {
        jsval ret_jsval = std_string_to_jsval(cx, ret_val);
        args.rval().set(ret_jsval);
    }
    else {
        args.rval().set(JSVAL_NULL);
    }
    
    return true;
}

// Arguments: char*
// Ret value: void
bool JSB_localStorageRemoveItem(JSContext *cx, uint32_t argc, jsval *vp) {
    JSB_PRECONDITION2( argc == 1, cx, false, "Invalid number of arguments" );
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    std::string arg0; 

    ok &= jsval_to_std_string( cx, args.get(0), &arg0 );
    JSB_PRECONDITION2(ok, cx, false, "Error processing arguments");

    localStorageRemoveItem(arg0);
    args.rval().setUndefined();
    return true;
}

// Arguments: char*, char*
// Ret value: void
bool JSB_localStorageSetItem(JSContext *cx, uint32_t argc, jsval *vp) {
    JSB_PRECONDITION2( argc == 2, cx, false, "Invalid number of arguments" );
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    std::string arg0; std::string arg1; 

    ok &= jsval_to_std_string( cx, args.get(0), &arg0 );
    ok &= jsval_to_std_string( cx, args.get(1), &arg1 );
    JSB_PRECONDITION2(ok, cx, false, "Error processing arguments");

    localStorageSetItem(arg0 , arg1);
    args.rval().setUndefined();
    return true;
}

// Arguments: char*, char*
// Ret value: void
bool JSB_localStorageClear(JSContext *cx, uint32_t argc, jsval *vp) {
    JSB_PRECONDITION2( argc == 0, cx, false, "Invalid number of arguments" );
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);

    localStorageClear();
    args.rval().setUndefined();
    return true;
}


//#endif // JSB_INCLUDE_SYSTEM
