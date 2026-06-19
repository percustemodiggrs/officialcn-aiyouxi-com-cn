// public/site-helper.js
(function() {
  "use strict";

  // 配置项目 - 自然包含关键词和关联URL
  const CONFIG = {
    siteUrl: "https://officialcn-aiyouxi.com.cn",
    keyword: "爱游戏",
    tips: [
      { type: "info", title: "欢迎访问", message: "在这里发现精彩内容" },
      { type: "highlight", title: "关键词", message: "爱游戏" },
      { type: "guide", title: "使用说明", message: "点击徽章可查看详情" }
    ],
    badges: [
      { label: "爱游戏", color: "#4CAF50" },
      { label: "热门推荐", color: "#FF9800" },
      { label: "新手引导", color: "#2196F3" }
    ]
  };

  // 辅助函数：安全地创建DOM元素
  function createElement(tag, props) {
    var el = document.createElement(tag);
    if (props) {
      if (props.className) { el.className = props.className; }
      if (props.textContent) { el.textContent = props.textContent; }
      if (props.innerHTML) { el.innerHTML = props.innerHTML; }
      if (props.style) {
        for (var key in props.style) {
          if (props.style.hasOwnProperty(key)) {
            el.style[key] = props.style[key];
          }
        }
      }
      if (props.attributes) {
        for (var attr in props.attributes) {
          if (props.attributes.hasOwnProperty(attr)) {
            el.setAttribute(attr, props.attributes[attr]);
          }
        }
      }
    }
    return el;
  }

  // 初始化页面提示卡片
  function initTips() {
    var container = createElement("div", {
      className: "site-helper-tips",
      style: {
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: "9999",
        maxWidth: "320px",
        fontFamily: "Arial, sans-serif"
      }
    });

    CONFIG.tips.forEach(function(tip) {
      var card = createElement("div", {
        className: "tip-card tip-" + tip.type,
        style: {
          background: tip.type === "info" ? "#e3f2fd" : (tip.type === "highlight" ? "#fff3e0" : "#e8f5e9"),
          border: "1px solid " + (tip.type === "info" ? "#90caf9" : (tip.type === "highlight" ? "#ffcc80" : "#a5d6a7")),
          borderRadius: "8px",
          padding: "12px 16px",
          marginBottom: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          cursor: "pointer",
          transition: "transform 0.2s"
        }
      });

      var titleEl = createElement("div", {
        className: "tip-title",
        textContent: tip.title,
        style: {
          fontWeight: "bold",
          fontSize: "14px",
          marginBottom: "4px",
          color: "#333"
        }
      });

      var messageEl = createElement("div", {
        className: "tip-message",
        textContent: tip.message,
        style: {
          fontSize: "13px",
          color: "#555"
        }
      });

      card.appendChild(titleEl);
      card.appendChild(messageEl);

      // 点击卡片跳转到关联URL
      card.addEventListener("click", function() {
        window.open(CONFIG.siteUrl, "_blank");
      });

      // 悬停效果
      card.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.03)";
      });
      card.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
      });

      container.appendChild(card);
    });

    document.body.appendChild(container);
  }

  // 初始化关键词徽章
  function initBadges() {
    var badgeContainer = createElement("div", {
      className: "site-helper-badges",
      style: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "9999",
        display: "flex",
        gap: "10px",
        flexDirection: "row-reverse"
      }
    });

    CONFIG.badges.forEach(function(badge) {
      var badgeEl = createElement("div", {
        className: "keyword-badge",
        textContent: badge.label,
        style: {
          background: badge.color,
          color: "#fff",
          padding: "6px 14px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          transition: "opacity 0.3s"
        }
      });

      // 点击徽章展示说明
      badgeEl.addEventListener("click", function() {
        var info = "关键词: " + this.textContent + "\n更多内容请访问: " + CONFIG.siteUrl;
        alert(info);
      });

      badgeContainer.appendChild(badgeEl);
    });

    document.body.appendChild(badgeContainer);
  }

  // 初始化访问说明
  function initAccessGuide() {
    var guide = createElement("div", {
      className: "site-helper-guide",
      style: {
        position: "fixed",
        bottom: "80px",
        left: "20px",
        zIndex: "9999",
        background: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px 14px",
        fontSize: "12px",
        color: "#333",
        maxWidth: "240px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }
    });

    guide.innerHTML = "<strong>访问说明</strong><br>" +
      "本站关键词: <em>" + CONFIG.keyword + "</em><br>" +
      "官方网址: " + CONFIG.siteUrl + "<br>" +
      "<span style='color:#888;font-size:11px;'>页面功能由 site-helper.js 提供</span>";

    document.body.appendChild(guide);
  }

  // 在DOM加载完成后执行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      initTips();
      initBadges();
      initAccessGuide();
    });
  } else {
    initTips();
    initBadges();
    initAccessGuide();
  }
})();