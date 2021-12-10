;; Added by Package.el.  This must come before configurations of
;; installed packages.  Don't delete this line.  If you don't want it,
;; just comment it out by adding a semicolon to the start of the line.
;; You may delete these explanatory comments.

;; (package-initialize)

(setq user-full-name "Alessandra Bilardi"
      user-mail-address "alessandra.bilardi@gmail.com")

;; disable the annoying bell ring
(setq ring-bell-function 'ignore)

;; disable startup screen
(setq inhibit-startup-screen t)

;; time
(setq display-time-day-and-date t
      display-time-24hr-format t)

;; mode line settings
(line-number-mode t)
(column-number-mode t)
(size-indication-mode t)
(display-time-mode t)

;; enable y/n answers
(fset 'yes-or-no-p 'y-or-n-p)

;; highlighting
(setq select-active-regions 'only)
(set-face-attribute 'region nil :background "#666" :foreground "#ffffff")
(set-face-background 'region "midnightblue")

;; indentation
(setq-default indent-tabs-mode nil)
(setq-default tab-width 1)
(setq tab-width 1)
(global-set-key (kbd "RET") 'newline-and-indent)

;; code
(show-paren-mode t)
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(package-selected-packages (quote (org-edna))))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
