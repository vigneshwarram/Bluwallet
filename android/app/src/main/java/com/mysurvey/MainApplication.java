package com.mysurvey;

import android.app.Application;

import com.facebook.react.ReactApplication;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;

import com.wix.RNCameraKit.RNCameraKitPackage;
import com.bluroverly.SajjadBlurOverlayPackage;
import com.imagepicker.ImagePickerPackage;
import com.mg.app.PickerPackage;
import com.facebook.react.modules.email.EmailPackage;
import com.horcrux.svg.SvgPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.rnfingerprint.FingerprintAuthPackage;

import com.swmansion.reanimated.ReanimatedPackage;

import com.learnium.RNDeviceInfo.RNDeviceInfo;

import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SplashScreenReactPackage(),
            new ImageResizerPackage(),
            new RNCameraKitPackage(),
         
  
          
         
            new SajjadBlurOverlayPackage(),
            new ImagePickerPackage(),
            new PickerPackage(),
            new EmailPackage(),
            new SvgPackage(),
            new LinearGradientPackage(),
            new FingerprintAuthPackage(),
           // 
            new ReanimatedPackage(),
            new RNDeviceInfo(),       
            new RNGestureHandlerPackage()
          
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
