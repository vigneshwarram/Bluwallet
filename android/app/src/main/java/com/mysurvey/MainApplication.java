package com.mysurvey;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.bluroverly.SajjadBlurOverlayPackage;
import com.imagepicker.ImagePickerPackage;
import com.mg.app.PickerPackage;
import com.facebook.react.modules.email.EmailPackage;
import com.horcrux.svg.SvgPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.rnfingerprint.FingerprintAuthPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.swmansion.reanimated.ReanimatedPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
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
            new RNFirebasePackage(),
            new RNGestureHandlerPackage(),
            new RNFirebaseMessagingPackage(),
            new RNFirebaseNotificationsPackage()
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
