import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Al-Maher App ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-surface-subtle flex items-center justify-center p-4 text-right" dir="rtl">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-surface-border text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 text-brand-500 border border-rose-100 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl font-black text-ink">متجر الماهر للخضروات والفاكهة</h2>
              <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                حدث خطأ غير متوقع أثناء تحميل الصفحة. اضغط بالأسفل للعودة للرئيسية وتحديث البيانات.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={this.handleReload}
                className="flex-1 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>إعادة تحميل الصفحة</span>
              </button>
              <a
                href="/"
                className="px-4 py-3 rounded-xl border border-surface-border text-ink font-bold text-xs sm:text-sm hover:bg-surface-subtle flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>الرئيسية</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}